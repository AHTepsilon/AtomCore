<script>
import { RouterLink, RouterView } from 'vue-router'
import Landing from './views/Landing.vue'
import Header from './components/Header.vue'
import Categories from './views/Categories.vue'
import AddProduct from './views/AddProduct.vue'
import Product from './views/Product.vue'
import ProductShowcase from './views/ProductShowcase.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import NotAvailableModal from './components/NotAvailableModal.vue'

export default {
  components: {
    Landing,
    Header,
    Categories,
    AddProduct,
    Product,
    ProductShowcase,
    NotAvailableModal,
    Login,
    SignUp
  },

  data(){
    return{
      
    }
  }

}
</script>

<template>
	<Header />
  <RouterView />

</template>

<style lang = "scss">
</style>
