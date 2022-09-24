<template>
        <div class="product-showcase-div">
            <RouterLink class="product-showcase-div-router"
                v-for="product in productsGet"
                :key="product.Name"
                :to="`/product/${product.id}`">  

                <div class="product-showcase-div-router-container">
                    <img class="product-showcase-div-router-container-img" :src="product.Image"/>
                    <p class="product-showcase-div-router-container-title">{{ product.Name }}</p>
                    <p class="product-showcase-div-router-container-price">{{ product.Price }}.00$</p>
                </div>
            </RouterLink>
            </div>

</template>

<script>
    import ProductComponent from '../components/ProductComponent.vue'
    import { createPinia, mapStores } from "pinia";
    import { useProductsStore } from '../stores/productStore';

    export default{
        computed: {
            ...mapStores(useProductsStore),
            productsGet(){
                return this.productsStore.getProducts;
            }
        },

        mounted(){
            this.productsStore.displayItem();
        }
        
        /*methods: {
            getItem(){

                this.list = [];

                let itemValue;
                let object;

                let itemArr = [];

                for(let i = 0; i < localStorage.length; i++){
                    itemValue = localStorage.getItem(localStorage.key(i));
                    object = JSON.parse(itemValue);

                    itemArr.push(object);
                }


                for(let j = 0; j < itemArr.length; j++){
                    console.log();
                    
                    this.item = itemArr[j];
                    this.list.push(this.item);
                }

            },
        },*/
    }
</script>

<style>

</style>