<template>
    <section>
		<div class="section_text">
			<h1 class="section_text_title">Categories</h1>
			<p class="section_text_paragraph">Search throughout all products by category</p>	
		</div>
		
		<div class="section_categories">
			<div class="section_categories_item">
				<img alt="Chemicals Icon" class="section_categories_item_image section_categories_item_image_chemical" src="\iconChemicals.png"/>
				<h3 class="section_categories_item_title">Chemicals</h3>
			</div>
			<div class="section_categories_item">
				<img alt="Lab Equipment Icon" class="section_categories_item_image section_categories_item_image_lab" src="\iconLab.png"/>
				<h3 class="section_categories_item_title">Lab Equimpent</h3>
			</div>
			<div class="section_categories_item">
				<img alt="Glassware Icon" class="section_categories_item_image section_categories_item_image_glassware" src="\iconGlassware.png"/>
				<h3 class="section_categories_item_title">Glassware</h3>
			</div>
			<div class="section_categories_item">
				<img alt="Safety Equipment Icon" class="section_categories_item_image section_categories_item_image_safety" src="\iconSafety.png"/>
				<h3 class="section_categories_item_title">Safety Equipment</h3>
			</div>
			<div class="section_categories_item">
				<img alt="Books Icon" class="section_categories_item_image section_categories_item_image_books" src="\iconBooks.png"/>
				<h3 class="section_categories_item_title">Books</h3>
			</div>
			<div class="section_categories_item">
				<img alt="Biological Equipment Icon" class="section_categories_item_image section_categories_item_image_bio" src="\iconBiological.png"/>
				<h3 class="section_categories_item_title">Biological Equipment</h3>
			</div>
		</div>
    </section>
</template>

<script>

</script>

<style lang="scss">
	$headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;
	
	section
	{
		.section_text
		{
			margin: 4em;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
		}
		
		.section_categories
		{
			
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			
			align-items: center;
			justify-content: center;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
			
			&_item
			{
				width: 100px;
				height: 200px;
				
				background: $babyBlue;
				margin: 2em;
				
				align-items: center;
				justify-content: center;
				
				text-align: center;
				
				padding: 30px;
				top: 0;
				
				
				&_title
				{
					
				}
				
				&_image
				{
					&_chemical
					{
						width: 4em;
						margin-bottom: 1em;
					}
					&_lab
					{
						width: 5em;
						margin-bottom: 1em;
					}
					&_glassware
					{
						width: 4em;
						margin-top: 1em;
						margin-bottom: 2em;
					}
					&_safety
					{
						width: 6em;
						margin-top: 3em;
						margin-bottom: 2em;
					}
					&_books
					{
						width: 6em;
						margin-top: 3em;
						margin-bottom: 2em;
					}
					&_bio
					{
						width: 3em;
						margin-bottom: 1em;
					}
				}
				
				transition: transform .2s;
				
				&:hover
				{
					cursor: pointer;
					background: darken($color: $babyBlue, $amount: 5);
					
					transform: scale(1.2);
				}
				
			}
		}
	}

</style>