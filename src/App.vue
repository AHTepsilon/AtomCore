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
import Cart from './views/Cart.vue'

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
    SignUp,
    Cart
  },

  data(){
    return{
      
    }
  },

  mounted(){
    const pinia = createPinia()
        app.use(pinia)
  }

}
</script>

<template>
	<Header />
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>

</template>

<style lang = "scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
