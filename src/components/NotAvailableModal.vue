<template>
    <transition name="modalDisplay">
        <div class="modalOverlay" v-if="modalActive">

        </div>
    </transition> 
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>

<style>
    modalDisplay-enter{
        
    }

    .modalOverlay{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>