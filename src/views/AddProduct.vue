<template>
    <section class="section-text">
        <h1 class="main_title">Manage Products</h1>
        <p class="main_subtitle">ONLY FOR ADMINS - Add products and edit products on the database.</p>
    </section>

    <section>
        <h2 class="form_title">Insert Data and Submit to Database</h2>
        <div class="addProduct_div">
			<div>
				<button class="addProduct_div_form_button" @click="setTrueAddForm">Add Items</button>
				<form action="" class="addProduct_div_form" @submit.prevent = "productUploaded" v-if="showingAddForm">
                <input class="addProduct_div_form_input" type="text" placeholder="Product Name" v-model="objectData.productName" required>
                <select class="addProduct_div_form_select" name="" id="" v-model="objectData.productType" required>
                    <option value="" disabled selected>Type of Product</option>
					<option value="chemical">Chemical</option>
					<option value="labEquipment">Lab Equipment</option>
					<option value="glassware">Glassware</option>
					<option value="safetyEquipment">Safety Equipment</option>
					<option value="book">Book</option>
					<option value="biologicalEquipment">Biological Equipment</option>
                </select>
                <input class="addProduct_div_form_input" type="text" placeholder="Quantity" v-model="objectData.quantity" required>
                <select class="addProduct_div_form_select" name="" v-model="objectData.productUnit" required>
                    <option value="" disabled>Unit of Measurement</option>
					<option value="units">Units</option>
					<option value="kilograms">Kilograms</option>
					<option value="grams">Grams</option>
					<option value="miligrams">Miligrams</option>
					<option value="gallons">Gallons</option>
					<option value="ounces">Ounces</option>
					<option value="liters">Liters</option>
					<option value="millilliters">Millilliters</option>
                </select>
				<input class="addProduct_div_form_input" type="number" placeholder="Price (USD)" v-model="objectData.productPrice" required>
                <input class="addProduct_div_form_image" type="file" placeholder="Picture" @change="onFileSelected" required>
                <input class="addProduct_div_form_button" type="submit" value="Upload Product">
            </form>
			</div>

			<div>
				<button class="addProduct_div_form_button" @click="setTrueShowForm">Edit Items</button>
				<form action="" class="addProduct_div_form" v-if="showingEditForm">
				<select class="addProduct_div_form_select" name="" id="" v-model="selectedProduct" @change="selectProductEditList($event)" required>
					<option v-for="product in productsGet" v-bind:value="product.id">{{ product.id }}</option>
				</select>
			</form>
			</div>
        </div>
    </section>
</template>

<script>
import { mapStores } from 'pinia';
import { useProductsStore } from '../stores/productStore';

	export default {
		data() {
			return { 
				objectData: 
				{
					productName: "",
					productType: "",
					quantity: "",
					productUnit: "",
					productPrice: "",
					productRating: 0,
					allRatings: 0,
					totalRating: 0,
					image: "",
				},
				
				showingEditForm: false,
				showingAddForm: false,
				products: this.gProducts,
				selectedProduct: null
			}	
		},

		computed: {
            ...mapStores(useProductsStore),
			productsGet(){
                return this.productsStore.getProducts;
            }
        },

		methods: {
		
			productUploaded(){

			this.productsStore.uploadProduct(this.objectData);
			//this.productsStore.uploadPicture(this.objectData.image);
			},

			onFileSelected(event){
				const reader = new FileReader();

				reader.addEventListener("load", (ev)=>{
					this.selectedFile = reader.result;

					this.objectData.image = this.selectedFile

					//console.log(this.selectedFile);
				});
				reader.readAsDataURL(event.target.files[0]);
			},

			setTrueShowForm(){
				this.showingEditForm = !this.showingEditForm
			},

			setTrueAddForm(){
				this.showingAddForm = !this.showingAddForm
			},

			gProducts(){
                return this.authenticationStore.getProducts
            },

			selectProductEditList(event){
				console.log(event.target.value);
			}
		
		},

		mounted(){
			this.productsStore.displayItem();
			console.log(this.productsStore.getProducts)
		},

		watch:{
			//products: this.productsStore.getProducts
		}
	}
</script>

<style lang="scss">

	.section-text{
		margin: 4em;
	}

	.main_title
	{
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 32px;
	}
	
	.main_subtitle
	{
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 12px;
	}

	.form_title
	{
		align-items: center;
		text-align: center;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin: 2em;
	}
		

	.addProduct_div
	{

		$babyBlue: #DAE4FF;
		$darkCyan: #A6BFFF;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		&_form
		{
			justify-content: center;
			align-items: center;
			display: flex;
			flex-direction: column;
			
			@mixin inputFormatter()
			{
				margin: 5px;
				width: 30em;
				height: 3em;
			}
			
			&_input
			{
				@include inputFormatter();
				
				background: #F0F0F0;
				color: #000000;
				
				border: none;
				outline: none;
			}
			
			&_select
			{
				@include inputFormatter();
				
				background: #F0F0F0;
				color: #000000;
				
				&:hover
				{
					background: $babyBlue;
				}
			}
			
			&_button
			{
				@include inputFormatter();
				
				background: $darkCyan;
				border: none;
				
				color: #FFFFFF;
				
				margin-top: 30px;
				
				&:hover
				{
					cursor: pointer;
					background: darken($darkCyan, 5%);
				}
			}
			
			&_image
			{
				margin: 5px;
				width: 30em;
			}
		}
	}

	@media all and (max-width: 414px){
		.main_title
		{
			text-align: center;
			font-size: 20px;
		}
		
		.main_subtitle
		{
			text-align: center;
			font-size: 10px;
		}

		.form_title{
			text-align: center;
			font-size: 20px;
		}

		.addProduct_div{
			&_form{
				
				&_input{

					width: 70%;

				}

				&_select{

					width: 70%;

				}

				&_image{
					width: 70%;
				}

				&_button{
					width: 70%;
				}
			}
		}
	}

</style>