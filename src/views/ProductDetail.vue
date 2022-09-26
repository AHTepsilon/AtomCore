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

    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

    .section_area{
        display: flex;
        flex-direction: row;

        font-family: Verdana, Geneva, Tahoma, sans-serif;

        &_div{

            &_text{
                
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