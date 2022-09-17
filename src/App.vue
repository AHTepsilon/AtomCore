<script>
import { RouterLink, RouterView } from 'vue-router'
import Landing from './components/Landing.vue'
import Header from './components/Header.vue'
import Categories from './components/Categories.vue'
import AddProduct from './components/AddProduct.vue'
import Product from './components/Product.vue'

export default {
  components: {
    Landing,
    Header,
    Categories,
    AddProduct,
    Product  
  }
}
</script>

<template>
	<Header />
  <RouterView />
</template>

<style lang = "scss">
</style>
