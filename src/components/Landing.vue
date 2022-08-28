<template>
    <header>
        <img alt="AtomCore logo" class="AClogo" src="@/assets/atomCoreLogo.png"/>

        <ul class="header_buttons">
            <li class="header_buttons_item"><img src="@/assets/shoppingCartBtn.png" alt=""/></li>
            <li class="header_buttons_item"><img src="@/assets/notifBtn.png" alt=""/></li>
            <li class="header_buttons_item"><img src="@/assets/userBtn.png" alt=""/></li>
        </ul>
    </header>
    <nav>
        <ul class="nav_buttons">
            <li class="nav_buttons_item">Categories</li>
            <li class="nav_buttons_item">Resources</li>
            <li class="nav_buttons_item">Subjects</li>
            <li class="nav_buttons_item">Shop by Bulk</li>
        </ul>

        <div class="searchbox_div">
            <button class="searchbox_div_button"><img src="@/assets/searchBtn.png" alt=""></button>
            <input type="text" placeholder="Search" class="searchbox_div_input">
        </div> 
    </nav>

    <section class="main_image_showcase">
        <h1>Chemistry Supplies for Schools and Students</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
        <button>Sign Up Now</button>
    </section>

   <!-- <section>
        <select name="Sort By" id="">
            <option value="">Alphabetical Order</option>
            <option value="">Lowest Price</option>
            <option value="">Highest Price</option>
        </select>
        <select name="Sort By" id="">
            <option value="">Chemicals</option>
            <option value="">Lab Equipment</option>
            <option value="">Glassware</option>
        </select>
    </section>-->
</template>

<script>

</script>

<style lang="scss">

    $headerColor: #00FFFF;
    $babyBlue: #DAE4FF;

    header
    {
        background-color: $headerColor;
        width: 100%;

        display: flex;
        flex-direction: row;

        padding: 20px;

        .header_buttons
        {

            display: flex;
            flex-direction: row;

            &_item
            {
                background-color: $babyBlue;
                width: 50px;
                height: 50px;
                list-style: none;
                border-radius: 50px;

                img
                {
                    display: block;
                    margin: 0 auto;
                    justify-content: center;
                    align-items: center;
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

                margin: 20px;
            }
            
        }

        .searchbox_div
        {

            &_button
            {
                width: 40px;
                height: 40px;
            }

            &_input
            {
                width: 300px;
                height: 40px;
            }

        }
    }

</style>