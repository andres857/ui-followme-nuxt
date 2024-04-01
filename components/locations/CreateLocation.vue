<template>

    <div class="flex justify-center min-h-screen">
        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Crear nueva Sede
                    </h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                        Llena los campos para crear una nueva sede.
                    </p>
                <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div class="mb-5">
                        <label for="location" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre</label>
                        <input type="text" v-model="nameLocation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sede principal" />
                    </div>

                    <div class="mb-5">
                        <label for="location" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Direccion</label>
                        <input type="text" v-model="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Cra 19 #13 - 24" />
                    </div>

                    <!-- button section -->
                        <button type="button" @click="onSubmit"
                            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-follow rounded-lg hover:bg-violet-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Guardar </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    
                    <!-- {{ nameLocation }} - {{ address }}
                    <h3>
                        {{ responseStatusServer }}
                    </h3>
                    <h4> 
                        {{ computedShowModal }}
                    </h4> -->
                </form>
            </div>
        </div>
    </div>


   
</template>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    
    const nameLocation = ref('');
    const address = ref('');
    const responseStatusServer = ref<any>([]);

    const onSubmit = async ()=>{
        try {
            const { status: responseStatus } = await useFetch(`${apiBase}/locations`, {
                method: 'POST',
                body: {
                    name: nameLocation.value,
                    address: address.value,
                    id_client: 1, //Se setea al cliente Numero 1
                },
            });
            responseStatusServer.value= responseStatus.value;
        } catch (error) {
            console.log(error);
        }
    }

    const computedShowModal = computed (()=>{
        return responseStatusServer.value === "success" ? true : false;
    })

</script>