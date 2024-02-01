<template>
    <div class="h-[80vh] grid grid-cols-3 gap-x-4 gap-y-5 bg-slate-200 p-5 overflow-y-auto">
        <UbicationCard class="h-[255px]" v-if="sidebarStore.currentSelection === 'Inicio'" 
            v-for=" ubication in ubicationStore.ubications" :key="ubication.id" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>
        
        <UbicationCard  class="h-[255px]" v-else-if="sidebarStore.currentSelection === 'Destino'" v-for=" ubication, index in ubicationStore.ubications" :key="index" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>

        <UbicationCard  class="h-[255px]" v-else-if="sidebarStore.currentSelection === 'Etapa'" v-for=" ubication, index in ubicationStore.ubications" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>
    </div>
</template>

<script lang="ts" setup>
    import UbicationCard from '~/components/UbicationCard.vue';
    const ubicationStore = useUbicationsStore();
    const sidebarStore = useSidebarStore();
</script>