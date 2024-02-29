<template>
    <div v-if="!showEditLocation" class=" bg-violet-300">
        <br/>
        {{ content }}
        <span>Buscar: </span>
        <input type="text" v-model="searchValue">
    
        <EasyDataTable
            v-model="selectedRow"
            :headers="headers"
            :items="locations"
            :search-value="searchValue"
            @click-row="showRow"
            buttons-pagination
            :rows-per-page="5"
        />
    </div>
    <div v-else>
        <EditLocation :name="content.name" :id="content.id" @close="closeModal"/>
    </div>
</template>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';
    import { ref } from "vue";
    import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
    import EditLocation from '~/components/locations/EditLocation.vue'

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const searchValue = ref('');
    const locations = ref<any>([]);
    const selectedRow = ref<Item>([]);
    const content = ref<any>([]);

    const showEditLocation = ref(false);

    const headers: Header[] = [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name"},
    ];

    const showRow = (item: ClickRowArgument)=>{
        content.value = item;
        showEditLocation.value = true;
        console.log(item);
    }

    const getLocations = async () =>{
        console.log('getLocations');
        try {
            const data =  await $fetch(`${apiBase}/locations`);
            console.log(data);
            locations.value = data.data;
        } catch (error) {
            console.error('Error fetching Locations:', error);
        }
    }

    const closeModal = async () => {
        await getLocations()
        showEditLocation.value = false;
    }

    onMounted(async ()=>{
        await getLocations()
    })
</script>