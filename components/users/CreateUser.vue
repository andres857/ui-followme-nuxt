<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="flex justify-center min-h-screen">
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
            let token = localStorage.getItem('token');
            const client = await $fetch('http://localhost:3026/clients', {
                method: 'GET',
                headers: {
                    'authorization': 'Bearer '+token,
                },
            })
            console.log('mounted');
            console.log(client);

            client_list.value = client;
        }
        catch(error: any){
            console.log(error);
        }
    })

</script>