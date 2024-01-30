<template>
    <div class="h-[80vh]" >
        <div class="flex justify-center items-start h-[5vh]">
            <h3 class=" text-follow text-xl"> Destinos más buscados </h3>
        </div>
        <div class=" grid h-[75vh]">
            <div class="grid justify-items-center content-start gap-y-1 overflow-y-auto"                 >
                <div class="w-11/12 h-[50px]" 
                    v-for="ubication in ubicationFound" :key="ubication.id" >
                    <itemMostSearch :nombre="ubication.ubication_name"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useSearchValueStore, useUbicationsStore } from '../stores/ubications';
    import itemMostSearch from './itemMostSearch.vue';
    
    const ubicationStore = useUbicationsStore();
    const searchValueStore = useSearchValueStore();

    ubicationStore.fetchUbicationsbyType('Destino');
    console.log( ubicationStore.ubications);

    const ubicationFound = computed(()=> {
        if ( searchValueStore.searchInput.trim().length > 0){
            return ubicationStore.ubications.filter( (ubication: any)=>{
                return ubication.name.toLowerCase().includes( searchValueStore.searchInput.trim());
            });
        }
        return ubicationStore.ubications;
    });

</script>