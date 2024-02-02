<template>
    <div class="h-[80vh]" >
        <div class="flex justify-center items-start h-[5vh]">
            <h3 class=" text-follow text-xl"> {{props.title}} </h3>
        </div>
        <div class=" grid h-[75vh]">
            <div class="grid justify-items-center content-start gap-y-1 overflow-y-auto"                 >
                <div class="w-11/12 h-[50px]" 
                    v-for="ubication, index in ubicationFound" :key="index" >
                    <itemMostSearch :nombre="ubication.name"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    import { useSearchValueStore, useUbicationsStore } from '../stores/ubications';
    import itemMostSearch from './itemMostSearch.vue';

    const props = defineProps({
        title: String,
    });

    
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