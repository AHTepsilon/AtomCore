<template>
    <section>
        <h1 class="main_title">Add Product</h1>
        <p class="main_subtitle">ONLY FOR ADMINS - Add products to the database.</p>
    </section>

    <section>
        <h2 class="form_title">Insert Data and Submit to Database</h2>
        <div class="addProduct_div">
            <form action="" class="addProduct_div_form">
                <input class="addProduct_div_form_input" type="text" placeholder="Product Name">
                <select class="addProduct_div_form_select" name="" id="">
                    <option value="">Type of Product</option>
                </select>
                <select class="addProduct_div_form_select" name="" id="">
                    <option value="">Type of Chemical</option>
                </select>
                <input class="addProduct_div_form_input" type="text" placeholder="Quantity">
                <select class="addProduct_div_form_select" name="" id="">
                    <option value="">Unit of Measurement</option>
                </select>
                <input class="addProduct_div_form_image" type="file" placeholder="Picture">
                <input class="addProduct_div_form_button" type="submit" placeholder="Upload Product">
            </form>
        </div>
    </section>
</template>

<script>

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