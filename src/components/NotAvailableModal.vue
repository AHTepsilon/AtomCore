<template>
    <transition name="modalDisplay">
        <div class="modalOverlay">
            <div class="modalContainer">
                <h2 class="modalContainer-title">Page not available</h2>
                <button class="modalContainer-button" @click="closeModal">Close</button>
            </div>
        </div>
    </transition> 
</template>

<script>
    export default {
        methods: {
            closeModal(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss">
    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;
    
    modalDisplay-enter{
        
    }

    .modalOverlay{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);

        .modalContainer{
            background-color: white;

            width: 800px;
            padding: 50px;
            background-color: white;

            border: 10px solid;
            border-color: $darkCyan;

            border-radius: 50px;

            &-title{
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }

            &-button{
                background: $darkCyan;
				border: none;
				
				color: #FFFFFF;
				
				margin-top: 30px;
                padding: 10px;
				
				&:hover
				{
					cursor: pointer;
					background: darken($darkCyan, 5%);
				}
            }
        }
    }
</style>