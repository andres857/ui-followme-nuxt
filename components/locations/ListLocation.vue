<template>
    <div v-if="!showEditLocation" class=" bg-white-100">
        <br/>
        <!-- {{ content }} -->
        <span class="pl-[3vh] text-xl">Buscar: </span><input type="text" class="bg-slate-200 px-4 rounded-xl rounded-br-xl text-xl focus:outline-none mb-5" v-model="searchValue">
    
        <EasyDataTable
            class="bg-violet-200 mx-[5vh] rounded-md shadow-md font-semibold text-xl"
            table-class-name="customize-table"
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
<style>
.customize-table {
--easy-table-border: 0.2px solid #8800b6 ;
--easy-table-row-border: 0.2px solid #8800b6;

--easy-table-header-font-size: 16px;
--easy-table-header-height: 30px;
--easy-table-header-font-color: #fff;
--easy-table-header-background-color: #8800b6;

--easy-table-header-item-padding: 10px 15px;

--easy-table-body-even-row-font-color: #fff;
--easy-table-body-even-row-background-color: #fff;

--easy-table-body-row-font-color: #3c0050;
--easy-table-body-row-background-color: #fcc2fc;
--easy-table-body-row-height: 5px;
--easy-table-body-row-font-size: 15px;

--easy-table-body-row-hover-font-color: #fff;
--easy-table-body-row-hover-background-color: #c46be2;

--easy-table-body-item-padding: 10px 15px;

--easy-table-footer-background-color: #8800b6;
--easy-table-footer-font-color: #fff;
--easy-table-footer-font-size: 14px;
--easy-table-footer-padding: 0px 10px;
--easy-table-footer-height: 50px;

--easy-table-rows-per-page-selector-width: 70px;
--easy-table-rows-per-page-selector-option-padding: 10px;
--easy-table-rows-per-page-selector-z-index: 1;


--easy-table-scrollbar-track-color: #8800b6;
--easy-table-scrollbar-color: #8800b6;
--easy-table-scrollbar-thumb-color: #fff;;
--easy-table-scrollbar-corner-color: #8800b6;

--easy-table-loading-mask-background-color: #8800b6;
}
</style>

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