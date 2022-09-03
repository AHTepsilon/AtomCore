import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '../components/Landing.vue'
import AddProduct from '../components/AddProduct.vue'

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
	}
  ]
})

export default router
