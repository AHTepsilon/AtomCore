<template>
    <section>
        <div class="section_text">
            <h1 class="section_text_title">Your Shopping Cart</h1>
        </div>
        <div class="cart-area">
            <ul class="cart-area-list">
                <li class="cart-area-list-element" v-for = "item in cartGet">
                    <img class="cart-area-list-element-img" src="{{ item.image }}">
                    <h3 class="cart-area-list-element-title">{{ item.Name }}</h3>
                    <h4 class="cart-area-list-element-price">{{ item.Price }}.00$</h4>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapStores } from 'pinia';
import { useProductsStore } from '../stores/productStore';
import { useAuthenticationStore } from '../stores/authentication';

export default {
    computed: {
            ...mapStores(useProductsStore, useAuthenticationStore),

            cartGet(){
                return this.productsStore.getShoppingCart;
            },
            
            getUser(){
                return this.authenticationStore.userId
            },
            
            getCartData(){
                return this.productsStore.cartData
            }, 
        },

        data(){
            return {current: {}}
        },

        mounted(){
            console.log(this.getUser);

            this.productsStore.getCart(this.getUser)

            console.log("Show", this.cartGet);
        },

        methods: {

        }
}
</script>

<style lang="scss">
    section
	{
		.section_text
		{
			margin: 4em;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
		}

        .cart-area{

            &-list{

                &-element{
                    
                    font-family: Verdana, Geneva,
                }
            }
        }
    }
</style>