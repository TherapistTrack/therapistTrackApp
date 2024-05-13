<template>
    <div class="sideBar">
        <div class="top">
            <img v-show="minim" src="../assets/LogoGray.png" alt="Therapist Track">
            <img class="minimize" src="../assets/arrow-left-double-fill.svg" alt="" @click="setMin">
        </div>
        <br>
        <div class="middle" v-show="minim">
            <div class="option" @click="setSelected(true)" :id="selected ? 'selected' : ''">
                <h4>Usuarios</h4>
            </div>
            <div class="option" @click="setSelected(false)" :id="!selected ? 'selected' : ''">
                <h4>Roles</h4>
            </div>
        </div>
        <div v-show="minim" class="bottom">
            lol
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
    padding: 1rem;
    border-radius: 0 5vh 5vh 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
    width: fit-content;
    max-width: 15vw;
    min-width: 3vw;
    transition: width 2s;
}

.sideBar .top {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 1vh;
    max-width: 15vw;
}

.sideBar .top img {
    display: block;
    height: auto;
    width: 100%;
}

.sideBar .middle {
    display: flex;
    flex-direction: column
}

.minimize {
    max-height: 5vh;
    transition: background-color 0.3s;
    border-radius: 2vh;
    min-width: 5vh
}

.minimize:hover {
    background-color: var(--vt-c-gray-1);
}

.sideBar h4 {
    color: var(--vt-c-dark-gray-1)
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

#selected h4 {
    color: aliceblue
}
</style>