<template>
    <div class="mb-5">
        <label for="location" class="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
        <input type="text" v-model="nameLocation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sede principal" />
    </div>

    <div class="mb-5">
        <label for="location" class="block mb-2 text-sm font-medium text-gray-900">Direccion</label>
        <input type="text" v-model="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Cra 19 #13 - 24" />
    </div>

    <!-- button section -->
    <div class="flex justify-center mt-4">
        <button @click="onSubmit" class="bg-follow px-3 py-2 rounded-xl text-white" type="button">Guardar</button>
    </div>
    {{ nameLocation }} - {{ address }}
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