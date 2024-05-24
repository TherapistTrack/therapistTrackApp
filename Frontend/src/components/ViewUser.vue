<template>
    <div class="overlayContainer">
        <div class="overlay">
            <div class="top">
                <h1>{{ data.nombre }}</h1>
                <img src="../assets/close-line.svg" alt="close" @click="$emit('closeView')">
            </div>
            <br>
            <div class="actions">
                <img src="../assets/delete-bin-7-fill.svg" alt="">
                <img src="../assets/edit-box-line.svg" alt="">
            </div><br>
            <div class="grid">
                <div class="grid-row">
                    <div class="grid-item">Telefonos</div>
                    <div class="grid-item">
                        <div class="grid" v-for="(item) in data.telefonos" :key="key"> {{ item }}</div>

                    </div>
                </div>
                <div class="grid-row">
                    <div class="grid-item">Rol</div>
                    <div class="grid-item"> {{ data.rol }}</div>
                </div>
                <div class="grid-row">
                    <div class="grid-item">No. Colegiado</div>
                    <div class="grid-item"> {{ data.numColegiado }}</div>
                </div>
                <div class="grid-row">
                    <div class="grid-item">Correos</div>
                    <div class="grid-item">
                        <div class="grid" v-for="(item) in data.correos" :key="key"> {{ item }}</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style>
.overlayContainer {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top {
    display: flex;
    justify-content: space-between;
}

.overlayContainer .top img {
    height: 4vh;
    border-radius: 1vh;
    transition: background-color 0.2s;
    cursor: pointer;
}

.overlayContainer .top img:hover {
    background-color: var(--vt-c-light-gray-1);
}

.overlay {
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    width: 50vw;
    height: 70vh;
    border-radius: 2.5vh;
    padding: 2rem;
}

.overlayContainer .grid-row:has(+ .grid-row) {
    border-bottom: 0.2vh solid #ccc;
}

.overlayContainer .grid-row {
    margin-bottom: 2vh;

    overflow-y: hide;
}

.actions {
    display: flex;
    gap: 4vw
}

.actions * {
    height: 4vh;

    border-radius: 1vh;
    transition: background-color 0.2s;
    cursor: pointer;
}

.actions *:hover {
    background-color: var(--vt-c-light-gray-1);
}

.overlayContainer .grid-row {
    color: var(--vt-c-dark-1);
}
</style>