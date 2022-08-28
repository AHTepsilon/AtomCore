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
    <section>
        <h1>Add Product</h1>
        <p>ONLY FOR ADMINS - Add products to the database.</p>
    </section>

    <section>
        <h2>Insert Data and Submit to Database</h2>
        <div>
            <form action="">
                <input type="text" placeholder="Product Name">
                <select name="" id="">
                    <option value="">Type of Product</option>
                </select>
                <select name="" id="">
                    <option value="">Type of Chemical</option>
                </select>
                <input type="text" placeholder="Quantity">
                <select name="" id="">
                    <option value="">Unit of Measurement</option>
                </select>
                <input type="file" placeholder="Picture">
                <input type="submit" placeholder="Upload Product">
            </form>
        </div>
    </section>
</template>

<script>

</script>

<style>

</style>