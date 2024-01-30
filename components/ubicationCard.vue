<template>
    <div class="flex max-w overflow-hidden bg-white rounded-lg shadow-lg">
        <!-- section Image -->
        <div class="h-full w-5/12 bg-slate-500 overflow-hidden">
            <img :src="displayImageUrl" alt=""  class="object-cover object-center w-full " style="height: 87%;">
            <div class="flex items-center px-4 py-3 gap-2" :class="bgTypeUbication" style="height: 13%;">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFfFFF" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>

                <h3 class="text-sm font-semibold text-white">{{ displayType }}</h3>
            </div>
        </div>
        <!-- section content -->
        <div class="w-7/12 grid content-center">
            <div class="px-4 py-2">
                <h1 class="text-base font-semibold text-gray-800">{{ props.nameUbication }}</h1>

                <p class="py-2 text-gray-700 text-sm"> {{ props.description }}</p>

                <div class="flex items-center mt-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>

                    <h1 class="px-2 text-sm">{{ props.location }}</h1>
                </div>

                <div class="flex items-center mt-1 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>

                    <h1 class="px-2 text-sm"> {{ props.floor }}</h1>
                </div>
            </div>

            <!-- buttons Area -->
            <div class="flex items-center justify-between mt-2 text-gray-700 mx-4">
                <button class="focus:outline-none text-sm font-semibold bg-slate-200 px-3 py-1 rounded-full ">
                    Codigo QR
                </button>
                <button class="focus:outline-none text-sm font-semibold bg-slate-200 px-3 py-1 rounded-full ">
                    <span>Editar</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script  lang="ts" setup>
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        nameUbication: String,
        imageUrl: String,
        description: String,
        location: String,
        floor: String,
        type: String
    });

    const displayImageUrl = computed(() => {
        if (props.imageUrl === '') {
            const imageUrlAlternative = 'https://winbox-assets.sfo3.digitaloceanspaces.com/followtest/IMG_1911.jpg';
            return imageUrlAlternative;
        }
        return props.imageUrl; // Retorna el tipo original para otros casos
    });

    const displayType = computed(() => {
        if (props.type === 'Inicio') {
            return 'Zona QR';
        }
        return props.type; // Retorna el tipo original para otros casos
    });


    const bgTypeUbication = computed(() => {
    let bgType = '';
        switch (props.type) {
            case 'Inicio':
                bgType = 'bg-red-500';
                break;
            case 'Destino':
                bgType = 'bg-green-500';
                break;
            // Añade más casos según sea necesario
            default:
                bgType = 'bg-gray-400'; // Un color por defecto
        }
        return bgType;
    });
</script>