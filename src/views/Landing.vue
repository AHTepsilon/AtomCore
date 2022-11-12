<template>

	<section class="headimage_section">
		<div class="section_text">
			<h1 class="section_text_title">Chemistry Supplies for Schools and Students</h1>
			<p class="section_text_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
			<RouterLink :to="{name: 'register'}"><button class="section_text_button">Sign Up Now</button></RouterLink>
		</div>
    </section>
</template>

<script>
	import { mapStores } from 'pinia';
import ProductComponent from '../components/ProductComponent.vue'
import {useAuthenticationStore} from '../stores/authentication'
	export default{
  		components:{
   	    	ProductComponent
		},

		computed: {
			...mapStores(useAuthenticationStore),

			getUserId(){
                return this.authenticationStore.userId
            },

            getUserIsAdmin(){
                return this.authenticationStore.isAdmin
            }
		},

		methods: {
			printLocalStorage(){
				for(let i = 0; i < localStorage.length; i++){
					console.log(localStorage.getItem(localStorage.key(i)));
				}
			}
		},

		mounted(){
			this.authenticationStore.validate();
            console.log(this.getUserId);
			this.authenticationStore.checkIfUserIsAdmin();
		}
	}
</script>

<style lang="scss">

	$headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

	.headimage_section
	{
		margin: 4em;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		
		.section_text
		{
			display: flex;
			flex-direction: column;
			margin-right: 30em;

			&_button{
				width: 120px;
				height: 3em;

				border: none;
				background-color: $babyBlue;

				&:hover{
					background: darken($color: $babyBlue, $amount: 5);
					cursor: pointer;
				}
			}
		}
	}

	@media all and (max-width: 414px){

	.headimage_section
	{
		margin: 4em;
		.section_text
		{
			align-items: center;
			justify-content: center;	
			margin-right: 1em;
	
			&_title{
				text-align: center;
			}

			&_paragraph{
				text-align: center;
			}

			&_button{
				width: 120px;
				height: 60px;
			}
		}
	}

	}
</style>