import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '../views/Landing.vue'
import Categories from '../views/Categories.vue'
import AddProduct from '../views/AddProduct.vue'
import Product from '../views/Product.vue'
import ProductShowcase from '../views/ProductShowcase.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

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
	},

	{
		path:'/',
		name: 'shop',
		component: ProductShowcase
	},

	{
		path: '/product/:id',
		name: 'detail',
		component: ProductDetail
	},

	{
		path:'/',
		name: 'login',
		component: Login
	},

	{
		path:'/',
		name: 'register',
		component: SignUp
	}
  ]
})

export default router
