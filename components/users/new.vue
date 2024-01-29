<!-- <template>
  <section class="bg-gray-300 dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/5"
        style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"
      ></div>

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
              <input
                type="text"
                placeholder="John"
                v-model="name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido</label>
              <input
                type="text"
                placeholder="Snow"
                v-model="lastname"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="client" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cliente</label>
              <select
                name=""
                id="client"
                v-model="selectClient"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="" selected>Seleccione una opción</option>
                <option v-for="client, index in client_list" :key="index" :value="client.id">
                  {{ client.name }}
                </option>
              </select>
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
              <div class="relative">
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  v-model="email"
                  @blur="validateEmail"
                  :class="{ 'border-red-500': !isEmailValid }"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
               
                <p v-if="!isEmailValid" class="relative inset-y-0 right-0 flex items-center pr-3 text-red-500 text-sm">Por favor, ingrese un correo válido</p>
          
                <span v-if="isEmailValid" class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 text-sm">&#10004;</span>
              </div>

            </div>

            <div>
              <label for="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
              <input
                type="password"
                placeholder="Enter your password"
                v-model="password"
                @blur="validatePassword"
                :class="{ 'border-red-500': !arePasswordsEqual }"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="password_confirmation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  v-model="password_confirmation"
                  @blur="validatePassword"
                  :class="{ 'border-red-500': !arePasswordsEqual }"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
               
                <p v-if="!arePasswordsEqual" class="relative inset-y-0 right-0 flex items-center pr-3 text-red-500 text-sm">Las contraseñas no coinciden</p>
                
                <span v-if="arePasswordsEqual" class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 text-sm">&#10004;</span>
              </div>
            </div>

            <button
              id="submitButton"
              name="submitButton"
              type="button"
              @click="createUser"
              :class="['flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform', 
                      {'bg-gray-500 focus:ring-blue-300 text-md text-white font-normal rounded-md': !isFormValid}, 
                      {'bg-violet-800 hover:bg-violet-900 focus:ring focus:ring-blue-300 text-white font-normal rounded-md': isFormValid}]"
              :disabled="!isFormValid"
            >
              <span>Guardar </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
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

const client_list = ref([]);

const name = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const selectClient = ref('');
const isEmailValid = ref(true);
const arePasswordsEqual = ref(true);


const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid.value = emailRegex.test(email.value);
};

const validatePassword = () => {
  arePasswordsEqual.value = password.value === password_confirmation.value;
};

const createUser = async () => {
  console.log('onsubmit');
  try {
    console.log('papassword');
    console.log(password.value);
    console.log('password_confirmation');
    console.log(password_confirmation.value);

    if (password.value !== password_confirmation.value) {
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
};

onMounted(async () => {
  try {
    const client = await $fetch('http://localhost:3026/clients');
    console.log('mounted');
    console.log(client);

    client_list.value = client;
  } catch (error: any) {
    console.log(error);
  }
});


function toggleButton() {
  // Deja la función toggleButton como está
  if (isEmailValid.value && arePasswordsEqual.value) {
    document.getElementById('submitButton').disabled = false;
    console.log("se creo un usuario");
  } else {
    document.getElementById('submitButton').disabled = true;
    console.log("faltan datos");
  }
}

// Nueva función para validar partes del formulario (excepto el nombre)
const validateFormParts = () => {
  const isLastNameValid = lastname.value.trim() !== '';
  const isClientValid = selectClient.value !== '';
  const isEmailValid = validateEmail(); // Utilizamos la función existente
  const arePasswordsEqual = validatePassword(); // Utilizamos la función existente

  return isLastNameValid && isClientValid && isEmailValid && arePasswordsEqual;
};

// Función computada para determinar si el formulario en su conjunto es válido
const isFormValid = computed(() => {
  const isNameValid = name.value.trim() !== '';
  const isOtherPartsValid = validateFormParts();

  return isNameValid && isOtherPartsValid;
});

</script> -->
<template>
  <section class="bg-gray-300 dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/5"
        style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"
      ></div>

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
              <input
                type="text"
                placeholder="John"
                v-model="name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido</label>
              <input
                type="text"
                placeholder="Snow"
                v-model="lastname"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="client" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cliente</label>
              <select
                name=""
                id="client"
                v-model="selectClient"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="" selected>Seleccione una opción</option>
                <option v-for="client, index in client_list" :key="index" :value="client.id">
                  {{ client.name }}
                </option>
              </select>
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
              <div class="relative">
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  v-model="email"
                  @blur="validateEmail"
                  :class="{ 'border-red-500': !isEmailValid }"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <!-- Mostrar mensaje de correo no válido -->
                <p v-if="!isEmailValid" class="relative inset-y-0 right-0 flex items-center pr-3 text-red-500 text-sm">Por favor, ingrese un correo válido</p>
                <!-- Mostrar símbolo de check si el correo es válido -->
                <span v-if="isEmailValid" class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 text-sm">&#10004;</span>
              </div>

            </div>

            <div>
              <label for="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
              <input
                type="password"
                placeholder="Enter your password"
                v-model="password"
                @blur="validatePassword"
                :class="{ 'border-red-500': !arePasswordsEqual }"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label for="password_confirmation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  v-model="password_confirmation"
                  @blur="validatePassword"
                  :class="{ 'border-red-500': !arePasswordsEqual }"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <!-- Mostrar mensaje si las contraseñas no coinciden -->
                <p v-if="!arePasswordsEqual" class="relative inset-y-0 right-0 flex items-center pr-3 text-red-500 text-sm">Las contraseñas no coinciden</p>
                <!-- Mostrar símbolo de check si las contraseñas coinciden -->
                <span v-if="arePasswordsEqual" class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 text-sm">&#10004;</span>
              </div>
            </div>

            <button
              id="submitButton"
              name="submitButton"
              type="button"
              @click="createUser"
              :class="['flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform', 
                      {'bg-gray-500 focus:ring-blue-300 text-md text-white font-normal rounded-md': !isFormValid}, 
                      {'bg-violet-800 hover:bg-violet-900 focus:ring focus:ring-blue-300 text-white font-normal rounded-md': isFormValid}]"
              :disabled="!isFormValid"
            >
              <span>Guardar </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

const client_list = ref([]);

const name = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const selectClient = ref('');
const isEmailValid = ref(true);
const arePasswordsEqual = ref(true);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid.value = emailRegex.test(email.value);
};

const validatePassword = () => {
  arePasswordsEqual.value = password.value === password_confirmation.value;
};

const createUser = async () => {
  console.log('onsubmit');
  try {
    console.log('papassword');
    console.log(password.value);
    console.log('password_confirmation');
    console.log(password_confirmation.value);

    if (password.value !== password_confirmation.value) {
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
};

onMounted(async () => {
  try {
    const client = await $fetch('http://localhost:3026/clients');
    console.log('mounted');
    console.log(client);

    client_list.value = client;
  } catch (error: any) {
    console.log(error);
  }
});

// Nueva función para validar partes del formulario (excepto el nombre)
const validateFormParts = () => {
  const isNameValid = name.value !== '';
  const isClientValid = selectClient.value !== '';
  const isEmailValid = validateEmail(); // Utilizamos la función existente
  const arePasswordsEqual = validatePassword(); // Utilizamos la función existente

  return isClientValid && isEmailValid && arePasswordsEqual;
};

// Función computada para determinar si el formulario en su conjunto es válido
const isFormValid = computed(() => {
  const isOtherPartsValid = validateFormParts();

  return isOtherPartsValid;
});
</script>