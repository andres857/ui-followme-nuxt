<template>
    <main class=" bg-white min-h-screen overflow-y-hidden">

        <header class="h-[16vh] grid justify-items-center ">
            <div class="grid justify-items-center content-center w-full bg-white px-3">
                <SearchUbicationStart/>
            </div>
            <div class="grid  justify-items-center content-center w-full bg-white px-3">
                <searchUbication/>
            </div>
        </header>

        <section class=" h-[84vh] grid grid-rows content-center mx-4 ">
            <UbicationsSectionHome :title="'displayTitleSection'"/>
        </section>
    </main>
    
</template>

<script lang="ts" setup>
    import searchUbication from '~/components/searchUbication.vue';
    import SearchUbicationStart from '~/components/SearchUbicationStart.vue';
    import UbicationsSectionHome from '~/components/UbicationsSectionHome.vue';

</script>