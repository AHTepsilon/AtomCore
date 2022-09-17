<template>
        <header>
        
		<RouterLink :to="{name: 'home'}">
			<img alt="AtomCore logo" id="AClogo" class="AClogo" src="\atomCoreLogo.png"/>
		</RouterLink>
		
        <ul class="header_buttons">
			<RouterLink :to="{name: 'addProduct'}"><li class="header_buttons_item"><img class="header_buttons_item_img" src="/adminBtn.png" alt=""/></li></RouterLink>
            <RouterLink :to="{name: 'shop'}"><li class="header_buttons_item"><img class="header_buttons_item_img" src="/shoppingCartBtn.png" alt=""/></li></RouterLink>
            <li class="header_buttons_item"><img class="header_buttons_item_img" src="/notifBtn.png" alt=""/></li>
            <li class="header_buttons_item"><img class="header_buttons_item_img" src="/userBtn.png" alt=""/></li>
        </ul>
    </header>
    <nav>
        <ul class="nav_buttons">
            <RouterLink :to="{name: 'categories'}"><li class="nav_buttons_item">Categories</li></RouterLink>
            <li class="nav_buttons_item">Resources</li>
            <li class="nav_buttons_item">Subjects</li>
            <li class="nav_buttons_item">Shop by Bulk</li>
        </ul>

        <div class="searchbox_div">
            <button class="searchbox_div_button"><img src="/searchBtn.png" alt=""></button>
            <input type="text" placeholder="Search" class="searchbox_div_input">
        </div> 
    </nav>
</template>

<script>

	import {RouterLink} from "vue-router";

</script>

<style lang="scss">
    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

    header
    {
        background-color: $headerColor;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
		
		.AClogo
		{
			margin-left: 3em;
		}

        .header_buttons
        {

            display: flex;
            flex-direction: row;
			margin-right: 4em;

            &_item
            {
                display: flex;
                background-color: $babyBlue;
                width: 50px;
                height: 50px;
                list-style: none;
                border-radius: 50px;
                align-items: center;
                justify-content: center;
				margin: 0.5em;

                &:hover{
                    background: darken($color: $babyBlue, $amount: 5);
                    cursor: pointer;
                }

                &_img
                {
                    display: block;
                    margin: 0 auto;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }

    nav
    {
        background-color: $babyBlue;

        width: 100%;
        height: 25%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 16px;
        
        .nav_buttons
        {
            display: flex;
            flex-direction: row;

            &_item
            {
                background-color: $babyBlue;
                width: 100px;
                height: 20px;
                list-style: none;
                border-radius: 50px;
				text-decoration: none;

                margin: 20px;

                &:hover{
                    font-weight: bold;
                    cursor: pointer;
                }
            }
            
        }

        .searchbox_div
        {
            display: flex;
            align-items: center;
			
			margin-right: 3em;

            &_button
            {
                width: 40px;
                height: 40px;
                background: $darkCyan;
                border: none;

                &:hover{
                    background: darken($color: $darkCyan, $amount: 5);
                    cursor: pointer;
                }
            }

            &_input
            {
                width: 300px;
                height: 40px;
                border: none;
            }

        }
    }
	
	body
	{
		margin: 0;
	}

    @media all and (max-width: 414px){

        header{
            display: flex;
            flex-direction: column;

            align-items: center;
            padding: 0;

            .AClogo{
                
                width: 60%;

            }

            .header_buttons{
                
                &_item{
                    width: 3em;
                    height: 3em;

                    &_img{
                    width: 2em;
                    height: 2em;  
                    }
                }
            }
        }

        nav{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: $headerColor;

            .nav_buttons{
                display: none;
            }

            .searchbox_div{


                &_input{

                    width: 300px;
                    background-color: $babyBlue;

                }
            }
        }
    }
</style>