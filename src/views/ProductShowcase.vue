<template>
        <div class="product-showcase-filt">
            <select class="product-showcase-filt-select-type" @change="filterBy($event,'A')">
                <option value="noFilter" disabled selected>Type of Products</option>
                <option value="noFilter">Any Type</option>
                <option value="0">Glassware</option>
                <option value="1">Chemicals</option>
                <option value="2">Lab Equipment</option>
                <option value="3">Safety Equipment</option>
                <option value="4">Books</option>
                <option value="5">Biological Equipment</option>
            </select>
            <select class="product-showcase-filt-select-type" @change="filterBy($event, 'B')">
                <option value="noFilter" disabled selected>Price</option>
                <option value="noFilter">Any Price</option>
                <option value="0">Lower than 5$</option>
                <option value="1">Lower than 10$</option>
                <option value="2">Lower than 15$</option>
            </select>
            <select class="product-showcase-filt-select-type" @change="filterBy($event, 'C')">
                <option value="noFilter" disabled selected>State</option>
                <option value="noFilter">Any State</option>
                <option value="0">Solids</option>
                <option value="1">Liquids</option>
                <option value="2">Non-Chemicals</option>
            </select>
            <select class="product-showcase-filt-select-sort" @change="sortBy($event)">
                <option value="" disabled selected>Sort by</option>
                <option value="0">A to Z</option>
                <option value="1">Z to A</option>
                <option value="2">Lowest Price</option>
                <option value="3">Highest Price</option>
                <option value="4">Type of Product</option>
            </select>
        </div>
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
        },

        methods:{
            sortBy(event){
                let selection = event.target.value;
                this.productsStore.sortProducts(selection);
            },

            filterBy(event, caller){
                let selected = event.target.value;
                console.log(selected);
                this.productsStore.filterProducts(selected, caller);
            }
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

<style lang="scss">

.product-showcase-div{

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &-router{

        margin: 20px;

        &-container{

            &-img{
                width: 10em;
                height: 10em;
            }
        }
    }

}

</style>