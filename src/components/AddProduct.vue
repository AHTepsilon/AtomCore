<template>
    <section>
        <h1 class="main_title">Add Product</h1>
        <p class="main_subtitle">ONLY FOR ADMINS - Add products to the database.</p>
    </section>

    <section>
        <h2 class="form_title">Insert Data and Submit to Database</h2>
        <div class="addProduct_div">
            <form action="" class="addProduct_div_form">
                <input class="addProduct_div_form_input" type="text" placeholder="Product Name" v-model="productName">
                <select class="addProduct_div_form_select" name="" id="" v-model="productType">
                    <option value="" disabled selected>Type of Product</option>
					<option value="">Chemical</option>
					<option value="">Lab Equipment</option>
					<option value="">Glassware</option>
					<option value="">Safety Equipment</option>
					<option value="">Book</option>
					<option value="">Biological Equipment</option>
                </select>
                <select class="addProduct_div_form_select" name="" id="" v-model="productSubtype">
                    <option value="" disabled selected>Subtype</option>
                </select>
                <input class="addProduct_div_form_input" type="text" placeholder="Quantity" v-model="quantity">
                <select class="addProduct_div_form_select" name="" id="" v-model="productUnit">
                    <option value="" disabled selected>Unit of Measurement</option>
					<option value="">Units</option>
					<option value="">Kilograms</option>
					<option value="">Grams</option>
					<option value="">Miligrams</option>
					<option value="">Gallons</option>
					<option value="">Ounces</option>
					<option value="">Liters</option>
					<option value="">Millilliters</option>
                </select>
				<input class="addProduct_div_form_input" type="number" placeholder="Price (USD)" v-model="productPrice">
                <input class="addProduct_div_form_image" type="file" placeholder="Picture" >
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
				productSubmit: ""
			
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