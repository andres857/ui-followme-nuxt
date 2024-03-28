<template>
    <div class="flex justify-center px-[5vh] h-[50px] w-full">

        <div class=" bg-follow w-14 h-full rounded-tl-xl rounded-bl-xl flex items-center"
        >
            <img class=" p-1" src="https://followme-assets.nyc3.cdn.digitaloceanspaces.com/icono_busqueda.svg" alt="">
        </div>

        <div class="flex-grow border-gray-300 border-[1px] rounded-r-xl">
            <input type="search" class=" bg-slate-200 px-4 rounded-tr-xl rounded-br-xl h-full w-full text-xl focus:outline-none"
            placeholder="Buscar Ubicacion" >
        </div>
    </div>
</template>

<script lang="ts" setup>
    // import {  useSearchValueStore } from '../stores/ubications';

    // const searchValueStore = useSearchValueStore();
</script>