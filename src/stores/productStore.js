import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useProductsStore = defineStore("products", {
  state: () => ({
      products: [],
      id: null,
      firebaseProducts: [],
      cartData: null,
  }),

  getters: {
      getProducts: (state) => [...state.products],
  },

  actions: {
    async defineDocs(){
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        const itemObject = {
            "id": doc.id,
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
                this.products = this.products.filter((item) => item.Type === "glassware");
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "chemical");
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "lab equipment");
                break;
            case "3":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "safety equipment");
                break;
            case "4":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "book");
                break;
            case "5":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "biological equipment");
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
                this.products = this.products.filter((item) => item.Price < 5);
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.Price < 10);
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.Price < 15);
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
                this.products = this.products.filter((item) => item.Type === "chemical" && item.Unit === "grams" || item.Unit === "miligrams" || item.Unit === "ounces" || item.Unit === "kilograms");
                break;
            case "1":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type === "chemical" && item.Unit === "millilliters" || item.Unit === "liters"  || item.Unit === "gallons");
                break;
            case "2":
                this.displayItem();
                this.products = this.products.filter((item) => item.Type !== "chemical");
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

  async getCart(userId){
    const querySnapshot = await getDocs(collection(db, "users", userId, "cart"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

        this.cartData = doc.data();
    });
  },

  }
})
