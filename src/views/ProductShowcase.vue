<template>
        
        <ul id="product-list">
            <li v-for="item in list">
                {{item.id}}
            </li>
        </ul>

</template>

<script>
    import ProductComponent from '../components/ProductComponent.vue'

    export default{
        data(){
            list: [
                {product: "banana"}
            ]
            
        }
    }
</script>

<style>

</style>