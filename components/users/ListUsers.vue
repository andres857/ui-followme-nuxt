<template>
    <div v-if="!showEditUser" class=" bg-violet-300">
        <br/>
        {{ content }}
        <span>Buscar: </span>
        <input type="text" v-model="searchValue">
    
        <EasyDataTable
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