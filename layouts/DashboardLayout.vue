<template>
    <main class=" flex">
        <section>
            <sideBar/>
        </section>

        <section class=" flex w-full min-h-screen gap-6 justify-center items-center ">
            <!-- content section -->
            <div class="h-full w-full grid ">
                <div class=" h-[8vh] flex justify-around items-center">
                    <h3> Zonas QR </h3>
                    <h3> Crear </h3>
                </div>
                <!-- search and filter section -->
                <div class="h-[12vh] flex justify-center items-center ">
                    <!-- <input type="text"> -->
                    <searchUbication class="w-6/12"/>
                </div>
                <!-- content cards section -->
                <div class="h-[80vh] grid grid-cols-5 gap-x-4 gap-y-5 bg-slate-200 p-5 overflow-y-auto">
                    
                    <ubicationCard v-if="sidebarStore.currentSelection === 'zonasQR'" class="h-[490px]" />
                    <div v-else="sidebarStore.currentSelection === 'Destinos'">
                        <div v-for="ubication in ubicationStore.ubications" :key="ubication.id">
                            <ubicationCard/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    import sideBar from '~/components/sideBar.vue';
    import searchUbication from '~/components/searchUbication.vue';
    import ubicationCard from '~/components/ubicationCard.vue';
    import ubicationCard2 from '~/components/ubicationCardv2.vue';
    import { useSidebarStore } from '~/stores/sidebar';
    
    const ubicationStore = useUbicationsStore();
    const sidebarStore = useSidebarStore();

    ubicationStore.fetchUbications();
    console.log( ubicationStore.ubications);

</script>
