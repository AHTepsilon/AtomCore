<template>
    <section class="section_area">
        <img :src="current.Image" class="product_div_image">
        <div class="section_area_div">
            <h1 class="section_area_div_text section_area_div_title">{{ current.Name }}</h1>
            <h2 class="section_area_div_text section_area_div_price">{{ current.Price }}.00$</h2>
            <h3 class="section_area_div_text section_area_div_type">{{ current.Type }}</h3>
            <h3 class="section_area_div_text section_area_div_amount">{{ current.Quantity }} {{ current.Unit }}</h3>
            <h3 class="section_area_div_text section_area_div_id">Product ID: {{$route.params.id}}</h3>
            <div class="buttons-div" style="display: flex; align-items: center;">
                <h3>Rating: </h3> 
                <button @click="rateProduct(1)" class="buttons-div-one butt">1</button>
                <button @click="rateProduct(2)" class="buttons-div-two butt">2</button>
                <button @click="rateProduct(3)" class="buttons-div-three butt">3</button>
                <button @click="rateProduct(4)" class="buttons-div-four butt">4</button>
                <button @click="rateProduct(5)" class="buttons-div-five butt">5</button>
            </div>
            <h3 class="section_area_div_text section_area_div_type">Current rating: {{ current.Rating }}</h3>
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
            },

            rateProduct(rating){
                this.productsStore.changeRating(this.current, rating);
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

            .buttons-div{
                .butt{
                    height: 20px;
                    width: 20px;
                    border-radius: 100px;
                    margin: 5px;

                    &:hover{
                        cursor: pointer;
                    }
                }

                &-one{
                    &:hover{
                        background-color: yellow;
                    }
                }

                &-two{
                    &:hover{
                        background-color: yellow;
                    }
                }

                &-three{
                    &:hover{
                        background-color: yellow;
                    }
                }

                &-four{
                    &:hover{
                        background-color: yellow;
                    }
                }

                &-five{
                    &:hover{
                        background-color: yellow;
                    }
                }
            }

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