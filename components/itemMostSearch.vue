<template>
    <div class="flex items-center justify-center bg-follow w-full h-full rounded-lg">
        <h3 class=" text-base text-white font-medium">
           <span> {{ nombre }} </span> 
        </h3>
    </div>
</template>

<script>
    export default {
        props: {
            nombre: String
        }
    }
</script>
