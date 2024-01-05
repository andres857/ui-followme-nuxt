<template>
    <main class=" bg-white min-h-screen overflow-y-hidden">

        <header class="h-[10vh] grid grid-rows justify-items-center">
            <div class="grid grid-rows justify-items-center content-center w-full bg-white px-3">
                <searchUbication/>
            </div>
        </header>

        <section class=" h-[80vh] grid grid-rows content-center mx-4 ">
            <mostSearchSection/>
        </section>
        <footer class="flex justify-center items-center h-[10vh] w-full">
            <footerWeb />
        </footer>
    </main>
    
</template>

<script lang="ts" setup>
    import searchUbication from '~/components/searchUbication.vue';
    import mostSearchSection from '../components/mostSearchSection.vue';
    import footerWeb from '~/components/footer/footerWeb.vue';

</script>