<template>
    <section v-if="!computedShowModal">
        <!-- Card Form-->
        <div class="flex justify-center">
            <!-- section image upload -->
            <div class="flex justify-center items-center bg-slate-300 w-4/12 p-10">
                <label for="dropzone-image" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>

                    <h2 class="mt-1 font-medium tracking-wide text-gray-700 ">Imagen</h2>

                    <p class="mt-2 text-xs tracking-wide text-gray-500"> Cargue o suelte su archivo PNG.</p>

                    <input id="dropzone-image" name="file" type="file" class="hidden" @change="onChangeFile" accept="image/jpeg, image/png" />
                    <pre> {{inputFile?.name}} </pre>
                </label>
                </div>
            <!-- section Datos -->
            <div class="p-5 w-4/12">
            <div>
                <label for="nameUbication" class="block text-sm text-gray-500">Nombre de la Ubicacion</label>
                <input type="text" placeholder="Entrada 1" v-model="nameUbication" class="block mt-1 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>

            <div class="mt-5">
                <label for="typeUbication" class="block mb-2 text-sm font-medium text-gray-900">Seleccione el tipo de ubicacion</label>
                <select id="typeUbication" v-model="selectedTypeUbication" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                    <option v-for="type, index in ubicationsTypes" :key="index" :value="type">
                        {{ type.name}}
                    </option>                    
                </select>
            </div>

            <div class="mt-5" v-if="selectedTypeUbication.id === 2">
                <label for="direction" class="block mb-2 text-sm font-medium text-gray-900">Seleccione la direccion</label>
                <select id="selection" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                    <option>
                        Arriba
                    </option>  
                    <option>
                        Abajo
                    </option>
                    <option>
                        Derecha
                    </option>
                    <option>
                        Izquierda
                    </option>                      
                </select>
            </div>

            <div class="mt-5"  v-if="selectedTypeUbication.id === 2">
                <label for="indication" class="block text-sm text-gray-500">Indicacion</label>
                <textarea placeholder="Siga derecho hasta ..." class="block mt-1 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "></textarea>
            </div>

            <div class="mt-5">
                <label for="Locations" class="block mb-2 text-sm font-medium text-gray-900">Seleccione la Sede </label>
                <select id="locations" v-model="selectedLocation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">                    
                    <option v-for="location in locations" :key="locations.id" :value="location">
                        {{ location.name }}
                    </option>  
                </select>
            </div>

            <div class="mt-5">
                <label for="floor" class="block mb-2 text-sm font-medium text-gray-900">Seleccione el Piso </label>
                <select id="floor" v-model="selectedFloor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                    <option v-for="floor, index in floors" :key="index" :value="floor">
                        {{ floor.name}}
                    </option>  
                </select>
            </div>

            <div class="mt-5" v-if="selectedTypeUbication.id !== 2">
                <label for="Description" class="block text-sm text-gray-500">Description</label>
                <textarea placeholder="lorem..." v-model="descriptionUbication" class="block mt-1 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "></textarea>
            </div>
            <div>
                {{ nameUbication }} - {{ selectedTypeUbication}} - {{ selectedLocation }} - {{ selectedFloor }}
            {{ descriptionUbication }} 
            </div>

            </div>
        </div>
        <!-- button section -->
        <div class="flex justify-center mt-4">
            <button @click="onSubmit" class=" bg-follow px-3 py-2 rounded-xl text-white" type="button">Guardar</button>
        </div>
    </section>
    <section v-else>
        <resourceCreatedModal
            :name="responseServer.data.name"
            :typeUbication="responseServer.data.typeUbication"
            :location="responseServer.data.location"
            :floor=" responseServer.data.floor"
        />
    </section>
</template>

<script lang="ts" setup>
    import { ref,onMounted } from 'vue';
    import resourceCreatedModal from '../modals/resourceCreatedModal.vue';

    const inputFile = ref<File | null >(null);
    const ubicationsTypes = ref<any>([]);
    const locations = ref<any>([]);
    const floors = ref<any>([]);

    const nameUbication = ref('');
    const selectedTypeUbication = ref<any>([]);
    const selectedLocation = ref<any>([]);
    const selectedFloor = ref<any>([]);
    const descriptionUbication = ref<any>([]);

    const responseServer = ref<any>([]);

    const onChangeFile = (event: Event) =>{
        const [_file] = (event.target as HTMLInputElement).files as FileList;
        inputFile.value = _file
    } 

    const onSubmit = async () =>{
        try {
            if(!inputFile.value) return;

            const formData = new FormData();
            const file = inputFile.value;

            // Añadir los campos de texto
            formData.append('nameUbication', nameUbication.value);
            formData.append('typeUbication', JSON.stringify(selectedTypeUbication.value));
            formData.append('location', JSON.stringify(selectedLocation.value));
            formData.append('floor', JSON.stringify(selectedFloor.value));
            formData.append('descriptionUbication', descriptionUbication.value);

            formData.append('file', file);
            
            const response = await $fetch('http://localhost:3026/ubications/new/upload', {
                method: 'POST',
                body: formData,
            });

            console.log('Respuesta del servidor:', response);
            responseServer.value= response;
        } catch (error: any) {            
            console.log(error.response._data);
            responseServer.value = error.response._data;
        }
    }

    const computedShowModal = computed (()=>{
        return responseServer.value.statusCode === 200 ? true : false;
    })
    onMounted(async ()=>{
        try {
            const typeUbication = await $fetch(`http://localhost:3026/type-ubications`);
            const location = await $fetch(`http://localhost:3026/locations`);
            const floor = await $fetch(`http://localhost:3026/floors`);
            
            ubicationsTypes.value = typeUbication;
            locations.value = location;
            floors.value = floor;
        } catch (error) {
            console.error('Error fetching Types:', error);
        }
    })
</script>