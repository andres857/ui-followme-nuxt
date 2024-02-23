<template>
    <div class="mb-5">
        <label for="nameFloor" class="block mb-2 text-sm font-medium text-gray-900">Piso</label>
        <input type="text" v-model="floor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Piso 1" />
    </div>

    <!-- button section -->
    <div class="flex justify-center mt-4">
            <button @click="onSubmit" class=" bg-follow px-3 py-2 rounded-xl text-white" type="button">Guardar</button>
        </div>
    {{ floor }}
    <h3>
        {{ responseStatusServer }}
    </h3>
    <h4>
        {{ computedShowModal }}
    </h4>
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