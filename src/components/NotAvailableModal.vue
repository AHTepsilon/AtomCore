<template>
    <transition name="modalDisplay">
        <div class="modalOverlay">
            <div class="modalContainer">
                <h2>Page not available</h2>
                <button @click="closeModal">Close</button>
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
        }
    }
</style>