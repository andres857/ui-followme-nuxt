<template>
    <main class=" flex">
        <section>
            <sideBar/>
        </section>

        <section class="bg-slate-200 flex w-full min-h-screen gap-6 justify-center items-center ">
            <!-- content section -->
            <div class="h-full w-full grid">
                <div v-if="showCreateNewResource" class=" h-[8vh] flex justify-around items-center ">
                    <div>
                        <div class="w-full text-left">
                            <nav aria-label="breadcrumb" class="block w-full">
                                <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
                                    <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                                        <a class="opacity-60" href="#">
                                        <span>{{sidebarStore.mainSelection}}</span>
                                        </a>
                                        <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                                        /
                                        </span>
                                    </li>
                                    <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                                        <a class="opacity-60" href="#">
                                        <span>{{ computedSelectionTitle }}</span>
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="">
                        <button type="button"
                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg md:w-auto bg-follow hover:bg-violet-900 focus:ring-4 focus:ring-violet-200 focus:outline-none "
                            @click="createNewResource"
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
                <div v-if="showSearchBar" class="h-[12vh] flex justify-center items-center" >
                    <searchLocation class="w-[650px]"/>
                </div>

                <!-- DashBoard Content -->
                <!-- renderizar el content de manera condicional -->
                <component :is="currentComponentContainer" @close="closeCreateResource"></component>

            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import sideBar from '~/components/sideBar.vue';
    import searchLocation from '~/components/ubications/SearchUbication.vue';
    import ContentUbications from '~/components/ubications/ContentUbications.vue';
    import CreateNewUbication from '~/components/ubications/CreateNewUbication.vue';

    import ListUsers from '~/components/users/ListUsers.vue';
    import CreateUser from '~/components/users/CreateUser.vue';

    import ListFloors from '~/components/floors/listFloor.vue';
    import CreateNewFloor from '~/components/floors/createNewFloor.vue';

    import ListLocations from '~/components/locations/ListLocation.vue';
    import CreateLocation from '~/components/locations/CreateLocation.vue';

    import { useSidebarStore } from '~/stores/sidebar';


    const sidebarStore = useSidebarStore();
    const showSearchBar = ref<Boolean>(false);
    const showCreateNewResource = ref<Boolean>(false);


    const closeCreateResource = async () => {
        showSearchBar.value = true; 
        showCreateNewResource.value = true;
        sidebarStore.currentSelection = 'Ubications'
    } 

    const createNewResource = ()=>{
        sidebarStore.resetSidebarState();
        sidebarStore.showCreateResource();
    }

    const computedSelectionTitle = computed(()=>{
        if (sidebarStore.mainSelection === 'Ubications'){
            if( sidebarStore.subSelection === 'Inicio'){
                return 'Zonas QR'
            } else if( sidebarStore.subSelection === 'Etapa'){
                return 'Etapas'
            }else if( sidebarStore.subSelection === 'Trayectos'){
                return 'Trayectos'
            }else{
                return 'Destinos'
            }
        } else if(sidebarStore.mainSelection === 'Recursos'){
            if( sidebarStore.subSelection === 'users'){
                return 'Usuarios'
            } else if( sidebarStore.subSelection === 'locations'){
                return 'Sedes'
            }else if( sidebarStore.subSelection === 'floors'){
                return 'Pisos'
            }
        }
    })

    const currentComponentContainer = computed(() => {

        if ( sidebarStore.mainSelection === 'Ubications') {
            showSearchBar.value = true; 
            showCreateNewResource.value = true;
            sidebarStore.currentSelection = 'Ubications'
            return ContentUbications;
        }else if (sidebarStore.mainSelection === 'Recursos'){
            if ( sidebarStore.subSelection === 'users'){
                showSearchBar.value = false; 
                showCreateNewResource.value = true;
                sidebarStore.currentSelection = 'users'
                return ListUsers;
            }else if (sidebarStore.subSelection === 'floors'){
                showSearchBar.value = false; 
                showCreateNewResource.value = true;
                sidebarStore.currentSelection = 'floors'
                return ListFloors;
            } else if( sidebarStore.subSelection === 'locations'){
                showSearchBar.value = false; 
                showCreateNewResource.value = true;
                sidebarStore.currentSelection = 'locations'
                return ListLocations;
            }
        //evalua la creacion de recursos
        }else if (sidebarStore.createNewResource ){ 
            if (sidebarStore.currentSelection === 'floors'){
                showCreateNewResource.value = false;
                showSearchBar.value = false;
                return CreateNewFloor;
            }else if ( sidebarStore.currentSelection === 'Ubications') {
                showSearchBar.value = false; 
                showCreateNewResource.value = false;
                return CreateNewUbication;
            }else if ( sidebarStore.currentSelection === 'users'){
                showSearchBar.value = false; 
                showCreateNewResource.value = false;
                return CreateUser;
            }else if( sidebarStore.currentSelection === 'locations'){
                showSearchBar.value = false; 
                showCreateNewResource.value = false;
                return CreateLocation;
            }
        } 
    });
    // events
    

</script>


<!-- <script lang="ts">
    // export default {
    //     async beforeMount() {
    //         if (process.client) {
    //         // Verifica si se está ejecutando en el lado del cliente antes de usar localStorage
    //         const storedToken = localStorage.getItem('token');

    //         if (storedToken) {
                
    //             // Accede a $axios a través del contexto
    //             const { $axios } = this;

    //             // Verifica que $axios esté definido antes de usarlo
    //             if ($axios) {
    //             // Configura el token en el encabezado de la solicitud si está presente
    //                 $axios.setToken(storedToken, 'Bearer');

    //                 // Configurar un interceptor para manejar respuestas 401
    //                 $axios.onError(error => {
    //                     const code = parseInt(error.response && error.response.status);
    //                     if (code === 401) {
    //                         // El token es inválido o ha caducado, redirigir al inicio de sesión
    //                         this.$router.push('/login');
    //                     }
    //                     return Promise.reject(error);
    //                 });
    //             }
    //         } else {
    //             // El token no está presente en el localStorage
    //             // Puedes manejar la
    //             this.$router.push('/login');
    //         }
    //     }
    //     }
    // }
</script> -->