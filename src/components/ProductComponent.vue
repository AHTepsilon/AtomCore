<template>
    <RouterLink :to="{name: 'product'}">
        <div class="product_div">
            <img src="/placeholder.jpg" class="product_div_image">
            <div class="product_div_text">
                <h3 class="product_div_text_title">Product</h3>
                <h4 class="product_div_text_price">Price</h4>
            </div>
        </div>
    </RouterLink>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

export default{
  		components:{
   	    	
		},

        data(){

        },

        methods: {
            getItem(){
                for(let i = 0; i < localStorage.length; i++){
                    localStorage.getItem(localStorage.key(i));
                }
            }
        }
    }
</script>

<style lang="scss">
    .product_div
    {
        text-align: center;

        &_image
        {
            width: 15em;
        }

        &_text
       {
            

            &_title
            {
                
            }

            &_price
            {

            }
        }
    }
</style>