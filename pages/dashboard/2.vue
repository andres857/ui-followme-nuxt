<template>
    <main class=" grid min-h-screen place-content-center">
        <div>
            <newUbication class=" w-full"/>
        </div>
        <div class="flex justify-center mt-4">
            <button class=" bg-follow px-3 py-2 rounded-xl text-white" type="button"> Guardar</button>
        </div>
    </main>
    <div>
    </div>
</template>

<script lang="ts" setup>
    import Dashboard from '~/layouts/DashboardLayout2.vue'
    import newUbication from '~/components/newUbication.vue';
</script>