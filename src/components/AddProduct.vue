<template>
    <section>
        <h1 class="main_title">Add Product</h1>
        <p class="main_subtitle">ONLY FOR ADMINS - Add products to the database.</p>
    </section>

    <section>
        <h2 class="form_title">Insert Data and Submit to Database</h2>
        <div class="addProduct_div">
            <form action="" class="addProduct_div_form" @submit.prevent = "productUploaded">
                <input class="addProduct_div_form_input" type="text" placeholder="Product Name" v-model="productName" required>
                <select class="addProduct_div_form_select" name="" id="" v-model="productType" required>
                    <option value="" disabled selected>Type of Product</option>
					<option value="chemical">Chemical</option>
					<option value="labEquipment">Lab Equipment</option>
					<option value="glassware">Glassware</option>
					<option value="safetyEquipment">Safety Equipment</option>
					<option value="book">Book</option>
					<option value="biologicalEquipment">Biological Equipment</option>
                </select>
                <select class="addProduct_div_form_select" name="" id="" v-model="productSubtype" required>
                    <option value="" disabled selected>Subtype</option>
					<option value="something">Something</option>
                </select>
                <input class="addProduct_div_form_input" type="text" placeholder="Quantity" v-model="quantity" required>
                <select class="addProduct_div_form_select" name="" v-model="productUnit" required>
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
				<input class="addProduct_div_form_input" type="number" placeholder="Price (USD)" v-model="productPrice" required>
                <input class="addProduct_div_form_image" type="file" placeholder="Picture" @change="onFileSelected" required>
                <input class="addProduct_div_form_button" type="submit" placeholder="Upload Product" v-model="productSubmit">
            </form>
        </div>
    </section>
</template>

<script>
	export default {
		data() {
			return { 
			
				productName: "",
				productType: "",
				productSubtype: "",
				quantity: "",
				productUnit: "",
				productPrice: "",
				productSubmit: "",
			}		
		},
		
		methods: {
		
			productUploaded(){
			
			console.log("product data has been submited");
			
			let newProduct = {
			
				Name: this.productName,
				Type: this.productType,
				Subtype: this.productSubtype,
				Quantity: this.quantity,
				Unit: this.productUnit,
				Price: this.productPrice,
				Image: this.selectedFile,
			};
			
			localStorage.setItem('item', JSON.stringify(newProduct));
			
			},

			onFileSelected(event){
				const reader = new FileReader();

				reader.addEventListener("load", (ev)=>{
					this.selectedFile = reader.result;

					console.log(this.selectedFile);
				});
				reader.readAsDataURL(event.target.files[0]);
			}
		
		}
	}
</script>

<style lang="scss">

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

	.addProduct_div
	{
	
		$babyBlue: #DAE4FF;
		$darkCyan: #A6BFFF;
		
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

</style>