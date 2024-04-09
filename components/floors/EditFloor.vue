<template>
    <transition enter-active-class="ease-out duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100" leave-to-class="opacity-0 ">

        <div class="relative z-10 modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <div>
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Editar Registro</h3>
                                </div>
                                <div class="my-2">
                                    <!-- <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Piso</label> -->
                                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="dataModal"/>
                                </div>
                                <!-- {{ responseStatusServer.statusCode }}     -->
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                        <!-- // ACTUALIZAR DATOS ------------------------ -->
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="updateFloor(id)">Actualizar</button>
                        
                        <!-- // ELIMINAR DATOS ------------------------ -->
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="deleteFloor(id)">Borrar</button>
                       
                        <!-- // CERRAR VENTANA ------------------------ -->
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeModal">Cerrar</button>
                    </div>
                </div>
                </transition>

                <transition v-if="successVisible" enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <ModalSuccess @close="closeModal"></ModalSuccess>
                </transition>

                <transition v-else-if="deleteVisible" enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Delete></Delete>
                </transition >

                <transition v-else-if="failedVisible" enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Failed></Failed>
                </transition>

                <transition v-else-if="processingVisible" enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Processing></Processing>
                </transition>

                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>

    import { useRuntimeConfig } from '#app';
    import ModalSuccess from '../modals/Success.vue';
    import Delete from '../modals/Delete.vue';
    import Failed from '../modals/Failed.vue';
    import Processing from '../modals/Processing.vue';

    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    const responseStatusServer = ref<any>([]);
    const dataModal = ref<any | null>('');

    // Variables para controlar los modals que se visualizan
    const successVisible = ref(false);
    const deleteVisible = ref(false);
    const failedVisible = ref(false);
    const processingVisible = ref(false);

    const props = defineProps({
        name: String,
        id: Number,
    });

    onMounted( ()=>{ 
        dataModal.value = props.name
    })

    // CERRAR VENTANA ------------------------

    const emits = defineEmits(['close']);

    // Emite el evento close al padre para cerrar el modal
    const closeModal = () => {        
        emits('close'); // Emitir el evento 'close'
    };

    onMounted(() => {
        const closeOnEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', closeOnEsc);
        // Limpiar los escuchadores de eventos al desmontar el componente para evitar fugas de memoria
        onUnmounted(() => {
            window.removeEventListener('keydown', closeOnEsc);
        });
    });

    // ACTUALIZAR DATOS ------------------------

    const handleResponde = ( statusCode: Number) => {
        if (statusCode === 200){
                successVisible.value=true;
                setTimeout(() => {
                    successVisible.value=false;
                    closeModal();
                }, 2000);
            }
            else if(statusCode === 404 || statusCode === 400 || statusCode || 500){
                failedVisible.value=true;
                setTimeout(() => {
                    failedVisible.value=false;
                    closeModal();
                }, 2000);
            }
    }

    const updateFloor = async( id: number) => {
        try {
            const response = await $fetch(`${apiBase}/floors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                    name: dataModal.value,
                },
            });
            
            // responseStatusServer.value = response.data;
            console.log("respuesta del server", response);
            handleResponde(response.statusCode);
        } catch (error) {
            failedVisible.value=true;
            console.error('Error', error);
        }
    }

    // ELIMINAR DATOS ------------------------

    const deleteFloor = async( id: string) => {
        try {
            const data = await useFetch(`${apiBase}/floors/${id}`, {
            method: 'DELETE',
            });
            // responseStatusServer.value = data.data;
            // console.log('Piso eliminado exitosamente', responseStatus.value);
        } catch (error) {
            console.error('Error al eliminar el piso:', error);
        }
    }

</script>