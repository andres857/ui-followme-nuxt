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

                <!-- DashBoard Content -->
                <!-- renderizar el content de manera condicional -->

            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import sideBar from '~/components/sideBar.vue';
    import searchUbication from '~/components/searchUbication.vue';
    import resourceCreatedModal from '~/components/modals/resourceCreatedModal.vue';

    import { useSidebarStore } from '~/stores/sidebar';
    import { useUbicationsStore } from '~/stores/ubications';
    import { useModalStatusStore } from '~/stores/modals';

    const ubicationStore = useUbicationsStore();
    const sidebarStore = useSidebarStore();
    const modalStore = useModalStatusStore();

    const showCreateNewUbication = ()=>{
        sidebarStore.currentSelection = 'CreateNewUbication';
    }

    const computedSelectionTitle = computed(()=>{
        return sidebarStore.currentSelection === 'Inicio' ? 'Zonas QR' : 'Destinos'
    })

</script>
