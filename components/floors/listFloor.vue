<template>
    <div v-if="!showEditFloor" class=" bg-violet-300">
        <br/>
        {{ content }}
        <span>Buscar: </span>
        <input type="text" v-model="searchValue">
    
        <EasyDataTable
            v-model="selectedRow"
            :headers="headers"
            :items="floors"
            :search-value="searchValue"
            @click-row="showRow"
            buttons-pagination
            :rows-per-page="7"
        />
    </div>
    <div v-else>
        <EditFloor :name="content.name" :id="content.id" @close="showEditFloor = false"/>
    </div>
</template>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';
    import { ref } from "vue";
    import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
    import EditFloor from '~/components/floors/EditFloor.vue'

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const searchValue = ref('');
    const floors = ref<any>([]);
    const selectedRow = ref<Item>([]);
    const content = ref<any>([]);

    const showEditFloor = ref(false);

    const headers: Header[] = [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name"},
    ];

    const showRow = (item: ClickRowArgument)=>{
        content.value = item;
        showEditFloor.value = true;
        console.log(item);
    }

    onMounted(async ()=>{
        try {
            const data = await $fetch(`${apiBase}/floors`);
            console.log(data);
            floors.value = data;
        } catch (error) {
            console.error('Error fetching Floors:', error);
        }
    })
</script>