<template>
    <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-lg shadow-slate-400">
        <div class="flex justify-center mx-auto h-[100px] w-full">
            <img class=" object-container h-full w-full" src="https://followme-assets.nyc3.cdn.digitaloceanspaces.com/FollowMeLogo.svg" alt="">
        </div>

        <div class="mt-6">
            <div>
                <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input type="text" v-model="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>

            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Contraseña</label>
                    <a href="#" class="text-xs text-gray-600 dark:text-gray-400 hover:underline"> Olvidaste tu clave</a>
                </div>
                <input type="password" v-model="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div class="mt-6">
                <button type="submit" @click="submit" class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-follow rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Entrar
                </button>
            </div>
        </div>

        <p class="mt-8 text-xs font-light text-center text-gray-400">© 2023 Windows Channel. All rights reserved</p>
    </div>
</template>

<script>
    
    export default {
        name: "login",
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async submit(){
                const auth = await fetch('http://localhost:3026/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });

                if(auth.status === 200){
                    const responseData = await auth.json();
                    const token = responseData.access_token;
                    localStorage.setItem('token', token);
                    await this.$router.push({name: 'dashboard'});
                }
            }
        }
    }
</script>