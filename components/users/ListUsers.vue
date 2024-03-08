<template>
    <div v-if="!showEditUser"class=" bg-violet-200">
        <br/>
        {{ content }}
        <span class="pl-[3vh] text-xl">Buscar: </span><input type="text" class="bg-slate-200 px-4 rounded-xl rounded-br-xl text-xl focus:outline-none mb-5" v-model="searchValue">
    
        <EasyDataTable
            class="bg-violet-200 mx-[5vh] rounded-md shadow-md font-semibold text-xl"
            table-class-name="customize-table"
            v-model="selectedRow"
            :headers="headers"
            :items="users"
            :search-value="searchValue"
            @click-row="showRow"
            buttons-pagination
            :rows-per-page="10"
        />
    </div>



    <div v-else>
        <EditFloor :name="content.firstName" :id="content.id" @close="closeModal"/>
    </div>
</template>
<style>
.customize-table {
--easy-table-border: 1px solid #660087 ;
--easy-table-row-border: 1px solid #660087;

--easy-table-header-font-size: 16px;
--easy-table-header-height: 30px;
--easy-table-header-font-color: #fff;
--easy-table-header-background-color: #660087;

--easy-table-header-item-padding: 10px 15px;

--easy-table-body-even-row-font-color: #fff;
--easy-table-body-even-row-background-color: #fff;

--easy-table-body-row-font-color: #fff;
--easy-table-body-row-background-color: #bc71d4;
--easy-table-body-row-height: 5px;
--easy-table-body-row-font-size: 15px;

--easy-table-body-row-hover-font-color: #660087;
--easy-table-body-row-hover-background-color: #eee;

--easy-table-body-item-padding: 10px 15px;

--easy-table-footer-background-color: #660087;
--easy-table-footer-font-color: #fff;
--easy-table-footer-font-size: 14px;
--easy-table-footer-padding: 0px 10px;
--easy-table-footer-height: 50px;

--easy-table-rows-per-page-selector-width: 70px;
--easy-table-rows-per-page-selector-option-padding: 10px;
--easy-table-rows-per-page-selector-z-index: 1;


--easy-table-scrollbar-track-color: #660087;
--easy-table-scrollbar-color: #660087;
--easy-table-scrollbar-thumb-color: #fff;;
--easy-table-scrollbar-corner-color: #660087;

--easy-table-loading-mask-background-color: #660087;
}
</style>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';
    import { ref } from "vue";
    import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
    // import EditUser from '~/components/floors/EditUser.vue'

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const searchValue = ref('');
    const users = ref<any>([]);
    const selectedRow = ref<Item>([]);
    const content = ref<any>([]);

    const showEditUser = ref(false);

    const headers: Header[] = [
        { text: "ID", value: "id" },
        { text: "Nombre", value: "firstName"},
        { text: "Email", value: "email"},
    ];

    const showRow = (item: ClickRowArgument)=>{
        content.value = item;
        showEditUser.value = true;
        console.log(item);
    }

    const getUsers = async () =>{
        console.log('getUsers');
        try {
            const data =  await $fetch(`${apiBase}/users`);
            console.log(data.data);
            
            users.value = data.data;
        } catch (error) {
            console.error('Error fetching Floors:', error);
        }
    }

    const closeModal = async () => {
        await getUsers()
        showEditUser.value = false;
    }

    onMounted(async ()=>{
        await getUsers()
    })
</script>