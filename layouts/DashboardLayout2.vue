<template>
    <main class=" flex">
        <section>
            <sideBar/>
        </section>

        <section class=" flex w-full min-h-screen gap-6 justify-center items-center ">
            <!-- content section -->
            <div class="h-full w-full grid ">
                <div class=" h-[8vh] flex justify-around items-center">
                    <h3> Zonas QR </h3>
                    <h3> Crear </h3>
                </div>
                <!-- search and filter section -->
                <div class="h-[12vh] flex justify-center items-center ">
                    <!-- <input type="text"> -->
                    
                    <searchUbication class="w-6/12"/>
                </div>
                <!-- content cards section -->
                <div class="h-[80vh] grid grid-cols-3 gap-x-4 gap-y-8 bg-slate-200 p-5 overflow-y-auto">
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                    <ubicationCard2 class="h-[320px]"/>
                </div>
            </div>
            <!-- <ubicationCard2 class="h-[320px]"/> -->
        </section>

    </main>

</template>

<script lang="ts" setup>
    import sideBar from '~/components/sideBar.vue';
    import searchUbication from '~/components/searchUbication.vue';
    import ubicationCard from '~/components/ubicationCard.vue';
    import ubicationCard2 from '~/components/ubicationCardv2.vue';
</script>
