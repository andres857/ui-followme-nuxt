<template>
    <div class=" bg-violet-300">
        <br/>
        <span>Buscar: </span>
        <input type="text" v-model="searchValue">
    
        <EasyDataTable
        :headers="headers"
        :items="floors"
        :search-value="searchValue"
        />
    </div>
</template>
  
<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';
    import { ref } from "vue";
    import type { Header, Item } from "vue3-easy-data-table";

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const searchValue = ref("");
    const floors = ref<any>([]);

    const headers: Header[] = [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "name"},
    ];

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