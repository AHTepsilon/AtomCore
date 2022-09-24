<template>
    <section class="section_area">
        <img :src="current.Image" class="product_div_image">
        <div>
            <h1>{{ current.Name }}</h1>
            <h2>{{ current.Price }}.00$</h2>
            <h3>{{ current.Type }}</h3>
            <h3>{{ current.Quantity }} {{ current.Unit }}</h3>
            <h3>Product ID: {{$route.params.id}}</h3>
        </div>
    </section>
</template>

<script>
import { mapStores } from 'pinia';
import { useProductsStore } from '../stores/productStore';

    export default {
        computed: {
            ...mapStores(useProductsStore),
            
        },

        data(){
            return {current: {}}
        },

        mounted(){
            this.current = this.productsStore.getProductById(this.$route.params.id);
            console.log(this.current);
        }
    }
</script>

<style lang = "scss">
    .section_area{
        display: flex;
        flex-direction: row;
    }

</style>