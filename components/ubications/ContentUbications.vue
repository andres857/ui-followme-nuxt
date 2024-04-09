<template>
    <div class="h-[80vh] grid grid-cols-3 gap-x-4 gap-y-5 bg-slate-200 p-5 overflow-y-auto">
    {{ ubicationStore.ubications }}        
        <UbicationCard class="h-[255px]" v-if="sidebarStore.subSelection === 'Inicio'" 
            v-for=" ubication in ubicationStore.ubications" :key="ubication.id" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="ubication.description" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>
        
        <UbicationCard  class="h-[255px]" v-else-if="sidebarStore.subSelection ===  'Destino'" v-for=" ubication, index in ubicationStore.ubications" :key="index" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>

        <UbicationCard  class="h-[255px]" v-else-if="sidebarStore.subSelection === 'Etapa'" v-for=" ubication, index in ubicationStore.ubications" :nameUbication="ubication.name" :imageUrl="ubication.imageUrl" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit...'" :location="ubication.location" :floor="ubication.floor" :type="ubication.ubicationType"/>
    </div>
</template>

<script lang="ts" setup>
    import UbicationCard from '~/components/UbicationCard.vue';
    const ubicationStore = useUbicationsStore();
    const sidebarStore = useSidebarStore();
    const ubications = ref<any>([]);

    // Observar cambios en sidebarStore.subSelection y cargar ubicaciones relevantes
    watch(() => sidebarStore.subSelection, async (newSubSelection) => {
    if (newSubSelection) {
        // Llamar a la API y actualizar `ubications` basado en el nuevo tipo de ubicación seleccionado
        await ubicationStore.fetchUbicationsbyType(newSubSelection);
        ubications.value = ubicationStore.ubications; 
    }
    }, { immediate: true }); // asegura que el watcher se ejecute inmediatamente con el valor actual al montar el componente
    
</script>