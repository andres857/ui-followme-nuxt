<template>

    <div class="flex justify-center min-h-screen">
        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-[50vh]    ">
                <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Crear nuevo piso
                    </h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                        Llena los campos para crear un nuevo piso.
                    </p>
                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                <div class="mb-5">
                    <label for="nameFloor" class="block mb-2 text-sm font-medium text-gray-900">Piso</label>
                    <input type="text" v-model="floor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Piso 1" />
                </div>

    <!-- button section -->
                        <button type="button" @click="onSubmit"
                            class="flex items-center justify-between w-[full] px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-follow rounded-lg hover:bg-violet-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Guardar </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
            </form>
                </div>
        </div>
    </div>

    
    <!-- {{ floor }}
    <h3> 
        {{ responseStatusServer }} 
    </h3>
    <h4>
        {{ computedShowModal }}
    </h4> -->
</template>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    
    const floor = ref('');
    const responseStatusServer = ref<any>([]);

    const onSubmit = async ()=>{
        try {
            const { status: responseStatus } = await useFetch(`${apiBase}/floors`, {
                method: 'POST',
                body: {
                    name: floor.value,
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