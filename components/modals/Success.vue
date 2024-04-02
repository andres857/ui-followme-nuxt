<template>
    <transition enter-active-class="ease-out duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100" leave-to-class="opacity-0 ">

        <div class="relative z-10 modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                
                    <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200 " leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex-col sm:justify-center text-center ">
                            
                            
                            <svg class="w-16 h-16 mx-auto text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>

                            <h1 class=" font-bold text-3xl py-[15px]">Success!</h1>
                            
                            <h3 class="pb-[15px]">Los datos se han actualizado correctamente.</h3>

                            <button data-modal-hide="popup-modal" type="button" class="text-white  bg-[#660087] hover:bg-[8500b2] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Continuar
                            </button>



                    </div>
                    </div>
                </div>
                </transition>
                </div>
            </div>
        </div>
    </transition>
</template>