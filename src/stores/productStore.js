import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";

export const useProductsStore = defineStore("products", {
  state: () => ({
      products: [],
      id: null,
      firebaseProducts: [],
  }),

  getters: {
      getProducts: (state) => [...state.products],
  },

  actions: {
    async defineDocs(){
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        console.log("HEY", doc.data().productName)

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
      //this.products = await this.defineDocs(db);
            /*{'Name': 'Ethanol',
            'Price': 5,
            'Quantity': '1',
            'Type': 'chemical',
            'Unit': 'liters',
            'id': '532412',
            'Image': 'https://m.media-amazon.com/images/I/61EgKHAns0L.jpg'},

            {'Name': 'Sulphuric Acid',
            'Price': 8,
            'Quantity': '250',
            'Type': 'chemical',
            'Unit': 'millilliters',
            'id': '342336',
            'Image': 'https://www.chemicals.co.uk/wp-content/uploads/2020/06/Sulphuric-Acid-General-Use-2.5L-packsize.jpg'},

            {'Name': 'Erlenmeyer Flask',
            'Price': 5,
            'Quantity': '1',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '101162',
            'Image': 'https://mx.vwr.com/stibo/low_res/std.lang.all/83/62/36738362.jpg'},

            {'Name': 'Nitric Acid',
            'Price': 10,
            'Quantity': '500',
            'Type': 'chemical',
            'Unit': 'millilliters',
            'id': '785412',
            'Image': 'https://www.sciencecompany.com/Assets/ProductImages/nc0671An-lg.jpg'},

            {'Name': 'Citric Acid',
            'Price': 15,
            'Quantity': '1',
            'Type': 'chemical',
            'Unit': 'kilograms',
            'id': '874687',
            'Image': 'https://cf.shopee.ph/file/6fc47d3e1598fd21b44e746f2af47b29'},

            {'Name': 'Ammonia',
            'Price': 15,
            'Quantity': '5',
            'Type': 'chemical',
            'Unit': 'litres',
            'id': '874113',
            'Image': 'https://www.ecochem.co.nz/wp-content/uploads/2019/04/Ammonia-5L-scaled.jpg'},

            {'Name': 'Bleach',
            'Price': 6,
            'Quantity': '1',
            'Type': 'chemical',
            'Unit': 'litres',
            'id': '017798',
            'Image': 'https://cdn.shopify.com/s/files/1/2715/8588/products/advanced-chemicals-Commercial-Bleach-12.5_1400x.jpg?v=1578644481'},

            {'Name': 'Trinitrotoluene',
            'Price': 50,
            'Quantity': '500',
            'Type': 'chemical',
            'Unit': 'grams',
            'id': '463108',
            'Image': 'https://inertproducts.com/wp-content/uploads/2020/05/New-9-2-2020-Nitrocellulose-Guncotton-Large-Sample-OTA-HME043-Website-copy.jpg'},

            {'Name': 'Nitroglycerin',
            'Price': 10,
            'Quantity': '50',
            'Type': 'chemical',
            'Unit': 'miligrams',
            'id': '705300',
            'Image': 'https://www.henryschein.com/Products/1048257_US_Product_01_600x600.jpg'},

            {'Name': 'Test Tubes',
            'Price': 10,
            'Quantity': '3',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '302000',
            'Image': 'https://www.velp.com/public/img/VELPA00000144-258352.jpg'},

            {'Name': '500ml Beaker',
            'Price': 7,
            'Quantity': '1',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '360574',
            'Image': 'https://ae01.alicdn.com/kf/HTB1OK36CuOSBuNjy0Fdq6zDnVXaJ/Vaso-de-vidrio-de-500mL-vaso-qu-mico-de-laboratorio-forma-baja-nuevo.jpg'},

            {'Name': '100ml Beaker',
            'Price': 3,
            'Quantity': '1',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '201335',
            'Image': 'https://http2.mlstatic.com/D_NQ_NP_634949-MCO48490209507_122021-O.jpg'},

            {'Name': '50ml Burette',
            'Price': 15,
            'Quantity': '1',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '469875',
            'Image': 'https://cdn.mysagestore.com/213e202843a2458524d03d38746298e9/contents/020201-0003Y/020201-0003Y.jpg'},

            {'Name': 'Glass Funnel',
            'Price': 10,
            'Quantity': '1',
            'Type': 'glassware',
            'Unit': 'units',
            'id': '700201',
            'Image': 'https://shop12456.sfstatic.io/upload_dir/shop/laboratory-equipment/_thumbs/drifton-glassco-funnel-238-202.w610.h610.fill.jpg'},

            {'Name': 'Celsius 12 \'\' Thermometer',
            'Price': 4,
            'Quantity': '1',
            'Type': 'lab equipment',
            'Unit': 'units',
            'id': '136947',
            'Image': 'https://cdn.shopify.com/s/files/1/2785/6868/products/lab_thermometer_x700.jpg?v=1581366063'},

            {'Name': 'Bunsen Burner',
            'Price': 55,
            'Quantity': '1',
            'Type': 'lab equipment',
            'Unit': 'units',
            'id': '100254',
            'Image': 'https://profilab24.com/bilder/produkte/gross/de-labor-gasbrenner-bunsenbrenner-bochem-bunsen-brenner-mit-nadelventil-din-30665-.jpg'},

            {'Name': 'Safety Goggles',
            'Price': 20,
            'Quantity': '2',
            'Type': 'safety equipment',
            'Unit': 'units',
            'id': '105268',
            'Image': 'https://nocry.com/static/2020/08/protective-safety-goggles-15252445364329-scaled.jpg'},

            {'Name': 'Hector',
            'Price': 1,
            'Quantity': '1',
            'Type': 'biological equipment',
            'Unit': 'units',
            'id': '999999',
            'Image': 'http://atlas-content-cdn.pixelsquid.com/stock-images/frog-Va4lJ52-600.jpg'},

            {'Name': 'General Chemistry by L. Pauling',
            'Price': 25,
            'Quantity': '1',
            'Type': 'book',
            'Unit': 'units',
            'id': '420128',
            'Image': 'https://m.media-amazon.com/images/I/41q387-Vl1L._AC_SY780_.jpg'},

            {'Name': 'The Chemistry Book by DK',
            'Price': 25,
            'Quantity': '1',
            'Type': 'book',
            'Unit': 'units',
            'id': '420129',
            'Image': 'https://images.penguinrandomhouse.com/cover/9780744056327'},

        ]*/
    

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
            await setDoc(doc(db, "users", userId, objectInfo.id, objectInfo.Name), objectInfo);
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

  }
})
