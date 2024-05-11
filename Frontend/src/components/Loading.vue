<template>
    <div class="center">
        <img class="loading" src="../assets/loader-2-line.svg" alt="">
    </div>
    
</template>

<style>
.center{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
}
.loading{
    height: 12vh;
    animation: rotate 2.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>