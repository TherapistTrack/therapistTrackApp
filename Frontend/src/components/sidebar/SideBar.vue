<template>
    <div class="sideBar">
        <div class="head">
            <div class="top">
                
            <img v-show="minim" class="logo" src="../../assets/LogoGray.png" alt="Therapist Track">
            <img class="minimize" src="../../assets/arrow-left-double-fill.svg" alt="" @click="setMin"
            :id="!minim ? 'flip' : ''" >
        </div>
        <br>
            <div v-show="minim" class="middle">
            <div class="option" @click="setSelected(true)" :id="selected ? 'selected' : ''">
                <h3>Usuarios</h3>
            </div>
            <div class="option" @click="setSelected(false)" :id="!selected ? 'selected' : ''">
                <h3>Roles</h3>
            </div>
        </div>
        </div>
        
        <div v-show="minim" class="bottom">
            <h4>
                <b>Roberto Rodriguez</b><br>Administrador
            </h4>
            <img src="../../assets/logout-box-r-line.svg" alt="" >
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const minim = ref(true);
const selected = ref(true);

const setMin = () => {
    minim.value = !minim.value;
}

const setSelected = (val) => {
    selected.value = val;
}


</script>

<style>
.sideBar {
    background-color: var(--vt-c-light-gray-1);
    padding: 0.5rem;
    border-radius: 0 5vh 5vh 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
    width: fit-content;
    min-width: fit-content;
    transition: width 2s;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between ;

}
.sideBar h3{
    font-weight: lighter;
    color: var(--vt-c-dark-gray-1)
}
.sideBar h4{
    font-weight: lighter;
    font-size: small;
    color: var(--vt-c-dark-gray-1)
}

.sideBar .top {
    padding: 2vh 0 0 2vh ;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 1vh;
    max-width: 15vw;
}

.sideBar .top .logo{
    width: 9vw;
    max-width: 9vw;
    height: auto;
}

.sideBar .middle{
    padding: 0 2vh 0 2vh;
}
.sideBar .bottom {
    border-top: 1px solid var(--vt-c-dark-gray-1);
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 1vh;
    max-width: 15vw;
    padding: 5vh 0 5vh 4vh;
}


.sideBar .middle {
    display: flex;
    flex-direction: column
}

.minimize,.sideBar .bottom img {
    max-height: 5vh;
    transition: background-color 0.3s;
    border-radius: 2vh;
    min-width: 5vh
}

.minimize:hover, .sideBar .bottom img:hover {
    background-color: var(--vt-c-gray-1);
}

.option {
    display: flex;
    padding: 0.4vh 0.4vh 0 1.5vh;
    border-radius: 1vh;
    cursor: pointer;
}

#selected {
    background-color: var(--vt-c-dark-gray-1);
}

#selected h3 {
    color: aliceblue
}

#flip {
    transform: rotate(180deg);
}

@media only screen and (max-width:920px){

    .sideBar .top .logo{
        content: url('../../assets/LogoSoloMono.png');
        width: 5vh;
        min-width: 5vh;
        height: 5vh;
        padding: 0;
    }
}

@media only screen and (max-width:1020px){

    .sideBar .bottom{
        grid-template-columns: unset;

    }   
}
</style>