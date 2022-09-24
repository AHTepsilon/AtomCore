import { defineStore } from 'pinia'

export const useProductsStore = defineStore("products", {
  state: () => ({
      products: [],
      localStorageArr: [],
  }),

  getters: {
      getProducts: (state) => [...state.products],
  },

  actions: {
    displayItem(){

      this.list = [];
      this.products = [];
      this.localStorageArr = [];
      
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

  }
  }
})
