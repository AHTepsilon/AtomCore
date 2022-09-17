import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '../components/Landing.vue'
import Categories from '../components/Categories.vue'
import AddProduct from '../components/AddProduct.vue'
import Product from '../components/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', 
      component: Landing
    },
	
	{
		path: '/',
		name: 'addProduct',
		component: AddProduct
	},
	
	{
		path:'/',
		name: 'categories',
		component: Categories
	},

	{
		path:'/',
		name: 'product',
		component: Product
	}
  ]
})

export default router
