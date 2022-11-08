import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc, setDoc, getDocs, collection, updateDoc, increment, runTransaction } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useProductsStore = defineStore("products", {
  state: () => ({
      products: [],
      id: null,
      firebaseProducts: [],
      cartData: null,
      shoppingCart: [],
  }),

  getters: {
      getProducts: (state) => [...state.products],
      getShoppingCart: (state) => [...state.shoppingCart],
  },

  actions: {
    async defineDocs(){
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());

        const itemObject = {
            "id": doc.id,
            "image": doc.data().image,
            "Name": doc.data().productName,
            "Price": doc.data().productPrice,
            "Rating": doc.data().productRating,
            "Type": doc.data().productType,
            "Unit": doc.data().productUnit,
            "Quantity": doc.data().quantity
        }

        this.products.push(itemObject);
        });

      },
    async displayItem(){

      this.list = [];
      this.products = [];
      this.defineDocs();

      console.log(this.products);
    
      let itemValue;
      let object;

      let itemArr = [];

      for(let i = 0; i < localStorage.length; i++){
          itemValue = localStorage.getItem(localStorage.key(i));
          object = JSON.parse(itemValue);

          this.products.push(object);
      }

      for(let j = 0; j < itemArr.length; j++){

          this.item = itemArr[j];
          this.list.push(this.item);
      }

  },

  async uploadProduct(objectData){
        let objectId = String(Math.floor(Math.random() *(999999-100000)+100000));

        this.id = objectId;

        let newProduct = objectData;
        objectData.id = objectId;

        try{
            await setDoc(doc(db, "items", objectId), newProduct);
            alert("Product uploaded");
          }
    
          catch(error){
            console.log(error);
          }
  },

  async editProduct(objectData){
    let newProduct = objectData;
    this.id = objectData.id;

    try{
        await setDoc(doc(db, "items", this.id), newProduct);
        alert("Product edited succesfully");
      }

      catch(error){
        console.log(error);
      }
},

  printId(){
    console.log(this.id)
  },

  getProductById(id){
      let filteredProducts = this.products.filter((product) => id === product.id)
      return filteredProducts ? filteredProducts[0] : null;
  },

  sortProducts(order){
    switch(order){
        case "0":
            this.products = _.sortBy(this.products, "Name");
            break;
        case "1":
            this.products = _.sortBy(this.products, "Name").reverse();
            break;
        case "2":
            this.products = _.sortBy(this.products, "Price");
            break;
        case "3":
            this.products = _.sortBy(this.products, "Price").reverse();
            break;      
        case "4":
            this.products = _.sortBy(this.products, "Type");
            break;       

    }
  },

  filterProducts(key, filterDo){

    if(filterDo == "A"){
        switch(key){
            case "noFilter":
                this.displayItem();
                break;
            case "0":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "glassware");
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "chemical");
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "lab equipment");
                break;
            case "3":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "safety equipment");
                break;
            case "4":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "book");
                break;
            case "5":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "biological equipment");
                break;
        }
    }

    if(filterDo == "B"){
        switch(key){
            case "noFilter":
                this.displayItem();
                break;
            case "0":
                this.displayItem();
                this.products = this.products.filter((item) => item.productPrice < 5);
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.productPrice < 10);
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.productPrice < 15);
                break;
        }
    }

    if(filterDo == "C"){
        switch(key){
            case "noFilter":
                this.displayItem();
                break;
            case "0":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "chemical" && item.Unit === "grams" || item.Unit === "miligrams" || item.Unit === "ounces" || item.Unit === "kilograms");
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType === "chemical" && item.Unit === "millilliters" || item.Unit === "liters"  || item.Unit === "gallons");
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.productType !== "chemical");
                break;
        }
    }
  },

  async addProductToCart(userId, objectInfo){

    console.log("SHOWING", userId, objectInfo.id);

    try{
        if(userId != null){
            await setDoc(doc(db, "users", userId, "cart", objectInfo.id), objectInfo);
            alert("Product added to cart");
        }
        else{
            alert("Please log in before adding products to cart");
        }
      }

      catch(error){
        console.log(error);
      }
  },

  async assingValuesToCart(data){
    this.cartData = data;
    this.shoppingCart.push(this.cartData);
  },

  async getCart(userId){
    this.shoppingCart = [];
    const querySnapshot = await getDocs(collection(db, "users", userId, "cart"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

    this.assingValuesToCart(doc.data())

    });
  },

  async uploadPicture(file){
    const storage = getStorage();
    const storageRef = ref(storage, 'imgs')

    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded file');
    })
  },

  async changeRating(objectInfo, newValue){
       const itemRef = doc(db, "items", objectInfo.id);

        await updateDoc(itemRef, {
            totalRatings: increment(1)
        });

        await updateDoc(itemRef, {
            allRatings: increment(newValue)
        });
        
        const itemDocRef = doc(db, "items", objectInfo.id);

        try {
    
            await runTransaction(db, async (transaction) => {
              const itemDoc = await transaction.get(itemDocRef);
              if (!itemDoc.exists()) {
                throw "Document does not exist!";
              }
          
              console.log(itemDoc.data().productRating + newValue);

              const newRating = (itemDoc.data().allRatings/itemDoc.data().totalRatings);
              transaction.update(itemDocRef, { productRating: newRating });
            });
            console.log("Transaction successfully committed!");
          } catch (e) {
            console.log("Transaction failed: ", e);
          }

  }

  }
})
