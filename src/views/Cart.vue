<template>
    <section>
        <div class="section_text">
            <h1 class="section_text_title">Your Shopping Cart</h1>
        </div>
        <div class="cart_area">
            <div class="cart_area_element">
                
            </div>
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
    }
</style>