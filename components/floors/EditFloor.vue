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
                                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="data"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{ responseStatusServer }}
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="updateFloor(id)">Actualizar</button>
                        
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="deleteFloor(id)">Borrar</button>
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeModal">Cerrar</button>
                    </div>
                </div>
                </transition>

                <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Success></Success>
                </transition>

                <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Failed></Failed>
                </transition>

                <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Delete></Delete>
                </transition>

                <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <Processing></Processing>
                </transition>

                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
    import { useRuntimeConfig } from '#app';
    import Delete from '../modals/Delete.vue';
    import Failed from '../modals/Failed.vue';
    import Processing from '../modals/Processing.vue';
    import Success from '../modals/Success.vue';


    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    const responseStatusServer = ref<any>([]);
    const data = ref<any | null>('');

    const props = defineProps({
        name: String,
        id: Number,
    });

    onMounted( ()=>{ 
        data.value = props.name
    })

    const emits = defineEmits(['close']);

    // Lógica para cerrar el modal y emitir el evento
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

    const updateFloor = async( id: number) => {
        try {
            const response = await useFetch(`${apiBase}/floors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                    name: data.value,
                },
            });
            
            responseStatusServer.value = response;
            if(responseStatusServer.value.data.statusCode >= 200 && responseStatusServer.value.data.statusCode <= 299){
                console.log('SuccessModal', responseStatusServer.value);
            }
            else if(responseStatusServer.value.data.statusCode >= 400 && responseStatusServer.value.data.statusCode <= 499){
                console.log('FailedModal', responseStatusServer.value);
            }
            else if(responseStatusServer.value.data.statusCode >= 100 && responseStatusServer.value.data.statusCode <= 199){
                console.log('ProcessingModal', responseStatusServer.value);
            }
            else{                
                console.log('FailedModal', responseStatusServer.value);
            }
        } catch (error) {
            console.error('FailedModal', error);
        }
    }

    const deleteFloor = async( id: string) => {
        try {
            const data = await useFetch(`${apiBase}/floors/${id}`, {
            method: 'DELETE',
            });
            responseStatusServer.value = data.data;

            if(responseStatusServer.value.data.statusCode >= 200 && responseStatusServer.value.data.statusCode <= 299){
                console.log('SuccessModal', responseStatusServer.value);
            }
            else[
                console.log( 'FailedModal')
            ]
            // console.log('Piso eliminado exitosamente', responseStatus.value);
        } catch (error) {
            console.error('FailedModal', error);
        }
    }

</script>