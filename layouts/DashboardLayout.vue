<template>
    <main class=" flex">
        <section>
            <sideBar/>
        </section>

        <section class=" flex w-full min-h-screen gap-6 justify-center items-center ">
            <!-- content section -->
            <div class="h-full w-full grid ">
                <div class=" h-[8vh] flex justify-around items-center">

                    <div>
                        <h3> {{ computedSelectionTitle }}</h3>
                    </div>

                    <div class="">
                        <button type="button"
                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg md:w-auto bg-follow hover:bg-violet-900 focus:ring-4 focus:ring-violet-200 focus:outline-none "
                            @click="showCreateNewUbication"
                        >
                            <svg class="h-4 w-4 mr-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                            </svg>
                            Crear
                        </button>
                    </div>

                </div>
                <!-- search and filter section -->
                <div class="h-[12vh] flex justify-center items-center">
                    <searchUbication class="w-[650px]"/>
                </div>

                <!-- content cards section -->
                <div class="h-[80vh] grid grid-cols-3 gap-x-4 gap-y-5 bg-slate-200 p-5 overflow-y-auto">
                    <ubicationCard class="h-[255px]" v-if="sidebarStore.currentSelection === 'Inicio'" 
                        v-for=" ubication in ubicationStore.ubications" :key="ubication.id" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>
                    
                    <ubicationCard  class="h-[255px]" v-else-if="sidebarStore.currentSelection === 'Destino'" v-for=" ubication, index in ubicationStore.ubications" :key="index" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>

                    <createNewUbication class="col-span-3 justify-center w-full" v-else-if="sidebarStore.currentSelection === 'CreateNewUbication'"/>
                    <resourceCreatedModal v-else-if="modalStore.modal"/>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import sideBar from '~/components/sideBar.vue';
    import searchUbication from '~/components/searchUbication.vue';
    import ubicationCard from '~/components/ubicationCard.vue';
    import createNewUbication from '~/components/forms/createNewUbication.vue';
    import resourceCreatedModal from '~/components/modals/resourceCreatedModal.vue';

    import { useSidebarStore } from '~/stores/sidebar';
    import { useUbicationsStore } from '~/stores/ubications';
    import { useModalStatusStore } from '~/stores/modals';

    const ubicationStore = useUbicationsStore();
    const sidebarStore = useSidebarStore();
    const modalStore = useModalStatusStore();

    const showCreateNewUbication = ()=>{
        // modalStore.showModal();
        sidebarStore.currentSelection = 'CreateNewUbication';
    }

    const computedSelectionTitle = computed(()=>{
        return sidebarStore.currentSelection === 'Inicio' ? 'Zonas QR' : 'Destinos'
    })

</script>
