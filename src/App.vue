<script>
import { RouterLink, RouterView } from 'vue-router'
import Landing from './views/Landing.vue'
import Header from './components/Header.vue'
import Categories from './views/Categories.vue'
import AddProduct from './views/AddProduct.vue'
import Product from './views/Product.vue'
import ProductShowcase from './views/ProductShowcase.vue'

export default {
  components: {
    Landing,
    Header,
    Categories,
    AddProduct,
    Product,
    ProductShowcase
  }
}
</script>

<template>
	<Header />
  <RouterView />

</template>

<style lang = "scss">
</style>
