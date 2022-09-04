<template>
    <section>
		<div class="section_text">
			<h1 class="section_text_title">Categories</h1>
			<p class="section_text_paragraph">Search throughout all products by category</p>	
		</div>
		
		<div class="section_categories">
			<div class="section_categories_item">
				<h3 class="section_categories_item_title">Chemicals</h3>
			</div>
			<div class="section_categories_item">
				<h3 class="section_categories_item_title">Lab Equimpent</h3>
			</div>
			<div class="section_categories_item">
				<h3 class="section_categories_item_title">Glassware</h3>
			</div>
			<div class="section_categories_item">
				<h3 class="section_categories_item_title">Safety Equipment</h3>
			</div>
			<div class="section_categories_item">
				<h3 class="section_categories_item_title">Books</h3>
			</div>
			<div class="section_categories_item">
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
			
		}
		
		.section_categories
		{
			
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			
			align-items: center;
			justify-content: center;
			
			&_item
			{
				width: 100px;
				height: 200px;
				
				background: $babyBlue;
				margin: 5em;
				
				align-items: center;
				justify-content: center;
				
				text-align: center;
				
				padding: 30px;
				top: 0;
				
				
				&_title
				{

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