<template>
    <div class="flex justify-center h-[50px] w-full">

        <div class=" bg-follow w-14 h-full rounded-tl-xl rounded-bl-xl flex items-center"
        @click="searchUbication"
        >
            <img class=" p-1" src="https://followme-assets.nyc3.cdn.digitaloceanspaces.com/icono_busqueda.svg" alt="">
        </div>

        <div class="flex-grow">
            <input @keyup.enter="searchUbication"  @click="searchUbication" type="search" class=" bg-slate-200 px-4 rounded-tr-xl rounded-br-xl h-full w-full text-xl focus:outline-none"
            placeholder="Buscar destino" v-model="searchValueStore.searchInput">
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue';
    import { useUbicationsStore, useSearchValueStore } from '../stores/ubications';

    const ubicationStore = useUbicationsStore();
    const searchValueStore = useSearchValueStore(); 

</script>