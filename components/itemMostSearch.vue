<template>
    <div class="flex items-center justify-center bg-follow w-full h-full rounded-lg">
        <h3 class=" text-base text-white font-medium">
           <span> {{ nombre }} </span> 
        </h3>
    </div>
</template>

<script  lang="ts" setup>
    import { defineProps } from 'vue';

    defineProps({
        nombre: String
    });
</script>
