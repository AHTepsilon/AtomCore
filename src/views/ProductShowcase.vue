<template>
    <button @click="displayItem">Load Items</button>
        <ul id="product-list">
            <li v-for="(item) in list">
                {{ item }}
            </li>
        </ul>

</template>

<script>
    import ProductComponent from '../components/ProductComponent.vue'

    export default{
        name: "App",
        data(){
            return{
                list: [],
                item: "",
            }   
        },

        methods: {
            getItem(){
                let itemValue;
                let object;

                let itemArr = [];

                for(let i = 0; i < localStorage.length; i++){
                    itemValue = localStorage.getItem(localStorage.key(i));
                    object = JSON.parse(itemValue);

                    itemArr.push(object);
                }


                for(let j = 0; j < itemArr.length; j++){
                    console.log(itemArr[j]);
                }

                return itemArr;
            },

            displayItem(){

                this.getItem();
                
                const product = document.createElement("a");
                product.className = "product";
            }
        }
    }
</script>

<style>

</style>