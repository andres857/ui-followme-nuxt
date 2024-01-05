<template>
    <div class="flex justify-center h-[50px] w-full">
        <div class=" bg-follow w-14 h-full rounded-tl-xl rounded-bl-xl flex items-center">
            <img class=" p-1" src="https://followme-assets.nyc3.cdn.digitaloceanspaces.com/icono_busqueda.svg" alt="">
        </div>
        <div class="flex-grow">
            <input type="search" class=" bg-slate-200 px-4 rounded-tr-xl rounded-br-xl h-full w-full text-xl focus:outline-none"
            placeholder="Busca tu destino" x-model="search">
        </div>
    </div>
</template>

<script lang="ts" setup>
    
</script>