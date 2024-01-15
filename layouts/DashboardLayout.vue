<template>
    <main class=" flex">
        <section>
            <sideBar/>
        </section>

        <section class=" flex w-full min-h-screen gap-6 justify-center items-center ">
            <!-- content section -->
            <div class="h-full w-full grid ">
                <div class=" h-[8vh] flex justify-around items-center">
                    <h3> {{ sidebarStore.currentSelection }}</h3>
                    <h3> Crear </h3>
                </div>
                <!-- search and filter section -->
                <div class="h-[12vh] flex justify-center items-center">
                    <searchUbication class="w-4/12"/>
                </div>

                <!-- content cards section -->
                <div class="h-[80vh] grid grid-cols-3 gap-x-4 gap-y-5 bg-slate-200 p-5 overflow-y-auto">

                    <ubicationCard2 class="h-[255px]" v-if="sidebarStore.currentSelection === 'zonasQR'" v-for=" ubication in ubicationStore.ubications" :key="ubication.name" :nameUbication="ubication.name" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="'Sede H'" :floor="'Piso 1'" :type="'zonasQR'"/>

                    <ubicationCard2  class="h-[255px]" v-else-if="sidebarStore.currentSelection === 'Destinos'" v-for=" ubication in ubicationStore.ubications"  :nameUbication="ubication.name" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="'Sede H'" :floor="'Piso 1'" :type="'Destinos'"/>

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
