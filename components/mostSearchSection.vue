<template>
    <div class="h-[80vh]" >
        <div class="flex justify-center items-start h-[5vh]">
            <h3 class=" text-follow text-xl"> Destinos mas buscados </h3>
        </div>
        <div class=" grid h-[75vh]">
            <div class="grid justify-items-center content-start gap-y-1 overflow-y-auto"                 >
                <div class="w-11/12 h-[50px]" v-for="ubication in ubicationStore.ubications" :key="ubication.id" >
                    <itemMostSearch :nombre="ubication.name"/>
                </div>
            </div>
            <!-- <button class=" bg-slate-400 text-white rounded-md text-lg" @click="ubicationStore.fetchUbications()"> get Ubications </button> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
    // import { ref, onMounted, onBeforeMount} from 'vue';
    import { useCounterStore, useUbicationsStore } from '../stores/ubications';
    import itemMostSearch from './itemMostSearch.vue';
    
    // const mostSearchedUbications = ref<APIResponseUbications[]>([]);
    const ubicationStore = useUbicationsStore();
    ubicationStore.fetchUbications();
    console.log( ubicationStore.ubications);
</script>