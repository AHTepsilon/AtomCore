<template>
    <div class="orbit-spinner-container">
        <div class="orbit-spinner">
            <div class="orbit"></div>
            <div class="orbit"></div>
            <div class="orbit"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang = "scss">

    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;
    
        .orbit-spinner, .orbit-spinner * {
      box-sizing: border-box;
    }

    .orbit-spinner-container{
        display: flex;
        flex-direction: row;
        align-items: center;
      justify-content: center;
    }

    .orbit-spinner {
      height: 55px;
      width: 55px;
      border-radius: 50%;
      perspective: 800px;
      align-self: center;
      justify-content: center;
    }

    .orbit-spinner .orbit {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .orbit-spinner .orbit:nth-child(1) {
      left: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
      border-bottom: 3px solid $darkCyan;
    }

    .orbit-spinner .orbit:nth-child(2) {
      right: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
      border-right: 3px solid $darkCyan;
    }

    .orbit-spinner .orbit:nth-child(3) {
      right: 0%;
      bottom: 0%;
      animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
      border-top: 3px solid $darkCyan;
    }

    @keyframes orbit-spinner-orbit-one-animation {
      0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }

    @keyframes orbit-spinner-orbit-two-animation {
      0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }

    @keyframes orbit-spinner-orbit-three-animation {
      0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }
</style>