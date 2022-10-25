<template>
    <section class="section_area">
        <img :src="current.Image" class="product_div_image">
        <div class="section_area_div">
            <h1 class="section_area_div_text section_area_div_title">{{ current.Name }}</h1>
            <h2 class="section_area_div_text section_area_div_price">{{ current.Price }}.00$</h2>
            <h3 class="section_area_div_text section_area_div_type">{{ current.Type }}</h3>
            <h3 class="section_area_div_text section_area_div_amount">{{ current.Quantity }} {{ current.Unit }}</h3>
            <h3 class="section_area_div_text section_area_div_id">Product ID: {{$route.params.id}}</h3>
        </div>
        <button class="addcart-button" @click="addToCart">Add to Cart</button>
    </section>
</template>

<script>
import { mapStores } from 'pinia';
import { useProductsStore } from '../stores/productStore';
import { useAuthenticationStore } from '../stores/authentication';

    export default {
        computed: {
            ...mapStores(useProductsStore, useAuthenticationStore),
            
            getUser(){
                return this.authenticationStore.userId
            }
        },

        data(){
            return {current: {}}
        },

        mounted(){
            this.current = this.productsStore.getProductById(this.$route.params.id);
            console.log(this.getUser)
        },

        methods: {
            addToCart(){
                this.productsStore.addProductToCart(this.getUser, this.current);
            }
        }
    }
</script>

<style lang = "scss">

    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

    .section_area{
        display: flex;
        flex-direction: column;

        align-items: center;
        text-align: center;

        margin-top: 5em;

        font-family: Verdana, Geneva, Tahoma, sans-serif;

        .product_div_image{
            width: 12em;
        }

        &_div{

            &_text{
                
            }
        }

        .addcart-button{
            width: 15em;
            height: 3em;

            border: none;
            background-color: $babyBlue;

            &:hover{
                background: darken($color: $babyBlue, $amount: 5);
                cursor: pointer;
            }
        }
    }

    @media all and (max-width: 414px){
        .section_area{
        display: flex;
        flex-direction: column;
        
        align-items: center;

        &_div{

            &_text{
                text-align: center;
            }
        }
    }
    }

</style>