<template>
    <div class="flex items-center justify-center bg-follow w-11/12 h-[50px] rounded-lg">
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
