<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div>

            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Crear nuevo usuario
                    </h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                        Llena los campos para crear un nuevo usuario.
                    </p>
                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre</label>
                            <input type="text" placeholder="John" v-model="name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido</label>
                            <input type="text" placeholder="Snow" v-model="lastname" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label for="client" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cliente</label>
                            <select name="" id="client" v-model="selectClient" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                <option value="" selected>Selecione una opción</option>
                                <option v-for="client, index in client_list" :key="index" :value="client.id">
                                    {{ client.name }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johnsnow@example.com" v-model="email" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label for="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                            <input type="password" placeholder="Enter your password" v-model="password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label for="password_confirmation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
                            <input type="password" placeholder="Enter your password" v-model="password_confirmation" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <button type="button" @click="createUser"
                            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-follow rounded-lg hover:bg-violet-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Guardar </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <!--
                    Background backdrop, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                    From: "opacity-0"
                    To: "opacity-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <!--
                        Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        To: "opacity-100 translate-y-0 sm:scale-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 sm:scale-100"
                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    -->
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';

    const client_list = ref('');

    const name = ref('');
    const lastname = ref('');
    const email = ref('');
    const password = ref('');
    const password_confirmation = ref('');

    const selectClient = ref('');

    
    const createUser = async () =>{
        console.log('onsubmit');
        try {
           
            console.log('papassword');
            console.log(password.value);
            console.log('password_confirmation');
            console.log(password_confirmation.value);

            if (password.value != password_confirmation.value) {
                console.log('no son iguales');
                alert('Las contraseñas no coinciden');
                return;
            }
            
            
            const formData = new FormData();



            formData.append('firstName', name.value);
            formData.append('lastName', lastname.value);
            formData.append('email', email.value);
            formData.append('password', password.value);
            formData.append('client', selectClient.value);
            formData.append('rol', 1);

            console.log('formData');
            console.log(formData);

            const response = await $fetch('http://localhost:3026/users', {
                method: 'POST',
                type: 'cors',
                body: JSON.stringify({
                    firstName: name.value,
                    lastName: lastname.value,
                    email: email.value,
                    password: password.value,
                    client: selectClient.value,
                    rol: 1,
                }),
            });

            console.log('response');
            console.log(response);
            
        } catch (error: any) {
            console.log(error);
        }
    }

   

    
    onMounted(async ()=>{
        try{
            const client = await $fetch('http://localhost:3026/clients')
            console.log('mounted');
            console.log(client);

            client_list.value = client;
        }
        catch(error: any){
            console.log(error);
        }
    })

</script>