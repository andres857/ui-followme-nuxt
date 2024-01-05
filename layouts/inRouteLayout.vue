<template>
    <main class=" bg-slate-200 min-h-screen overflow-y-hidden">

        <header class="h-[16vh] bg-white grid content-center ">
            <div class="grid grid-rows p-3">
                <searchUbication />
                <timeProgress/>
                <indicator/>
            </div>
        </header>

        <section class="h-[74vh] mx-4">
            <imageProgress />
        </section>

        <footer class="flex justify-center items-center bg-white h-[10vh]">
            <footerWeb/>
        </footer>
    </main>
</template>

<script lang="ts" setup>
    import searchUbication from '~/components/searchUbication.vue';
    import imageProgress from '~/components/progress/image.vue';
    import indicator from '~/components/progress/indicator.vue';
    import timeProgress from '~/components/progress/timeProgress.vue';
    import footerWeb from '~/components/footer/footerWeb.vue';
 
</script>