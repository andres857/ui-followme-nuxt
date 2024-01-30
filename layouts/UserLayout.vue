<template>
    <section class=" bg-white min-h-screen overflow-y-hidden">
        <main class="grid h-[89vh] md:h-[100vh] bg-center bg-no-repeat bg-cover" style="background-image: url('https://mediaweb.sfo3.cdn.digitaloceanspaces.com/backgroundFollowme.jpg');">
            <new_user></new_user>
        </main>
    </section>
</template>

<script lang="ts" setup>
    import new_user from '~/components/users/new.vue'
</script>


<script lang="ts">
    export default {
        async beforeMount() {
            if (process.client) {
            // Verifica si se está ejecutando en el lado del cliente antes de usar localStorage
            const storedToken = localStorage.getItem('token');

            if (storedToken) {
                
                // Accede a $axios a través del contexto
                const { $axios } = this;

                // Verifica que $axios esté definido antes de usarlo
                if ($axios) {
                // Configura el token en el encabezado de la solicitud si está presente
                    $axios.setToken(storedToken, 'Bearer');

                    // Configurar un interceptor para manejar respuestas 401
                    $axios.onError(error => {
                        const code = parseInt(error.response && error.response.status);
                        if (code === 401) {
                            // El token es inválido o ha caducado, redirigir al inicio de sesión
                            this.$router.push('/login');
                        }
                        return Promise.reject(error);
                    });
                }
            } else {
                // El token no está presente en el localStorage
                // Puedes manejar la
                this.$router.push('/login');
            }
        }
        }
    }
</script>
