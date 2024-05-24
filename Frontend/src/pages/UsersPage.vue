<template>
    <SideBar />
    <div class="page">
        <h1>Usuarios</h1>
        <p>En esta vista puede administrar a los usuarios que tienen acceso a la aplicación y editar su información.
        </p><br>
        <div class="options">
            <CustomInput :pholder="'Buscar por nombre'" />
            <Button :mssg="'Nuevo'" :onClick="clork" />
        </div>
        <div class="grid-container">
            <div class="grid-row">
                <p class="grid-header">Nombre</p>
                <p class="grid-header">Rol</p>
            </div>
            <div v-if="loading">
                <Loading />
            </div>

            <div class="grid-row" v-for="(item, key) in fetchedData" :key="key" @click="handleOpenView(key)">
                <div class="grid-item">{{ item.nombre }}</div>
                <div class="grid-item">{{ item.rol }}</div>
            </div>

        </div>
    </div>
    <div v-if="modalOpen">
        <ViewUser :data="fetchedData[selected] || { nombre: 'Rayo' }" @closeView="handleCloseView" />
    </div>

</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import '../assets/arrow-left-double-fill.svg'
import '../components/Button.vue'
import SideBar from '../components/sidebar/SideBar.vue'
import Button from '../components/Button.vue'
import CustomInput from '../components/CustomInput.vue'
import Loading from '../components/Loading.vue'
import ViewUser from '../components/ViewUser.vue'

const modalOpen = ref(false)
const selected = ref(0)
const fetchedData = ref(null);
const loading = ref(false)

onMounted(async () => {
    loading.value = true

    fetchData('http://localhost:3001/user/list')
    .then(data => {
        if (data) {
            fetchedData.value = data
            // Do something with the fetched data
        } else {
            console.log('Failed to fetch data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    await new Promise(resolve => setTimeout(resolve, 5000));

    loading.value = false
});

const clork = () => {
    console.log("Button pressed")
}

const handleCloseView = () => {
    modalOpen.value = false
}

const handleOpenView = (key) => {
    selected.value = key
    modalOpen.value = true
}

</script>

<style>
#app {
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    background-color: white;
    font-family: 'MotivaSansMedium'
}

.page {
    padding: 2rem;
    padding-top: 3rem;
    width: 70vw;
}

.options {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

h1,
p,
h2,
ul {
    color: black;
}

.page p {
    font-weight: lighter;
    font-size: small;
    color: var(--vt-c-dark-gray-1)
}


.grid-container {
    display: grid;
    grid-template-columns: auto;
    /* Two columns */
    color: var(--vt-c-dark-1);
    padding: 1rem;
}

.grid-row {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.page .grid-header,
.page .grid-item {
    padding: 0.5rem;
    border-bottom: 0.2vh solid #ccc;
}

.page .grid-header {
    font-family: 'MotivaSansLighter';
    border-top: 0.2vh solid #ccc;
    font-weight: bold;
}

.page .grid-item+.grid-item {
    border-left: 1px solid #ccc;
}

.page .grid-row:hover:not(:first-child){
    background-color: var(--vt-c-light-yellow-1);
    cursor: pointer;
}
@media only screen and (max-width:500px){

.page .options{
    display: flex;
    flex-direction: column;
    align-items: start;

}   
}
</style>