<template>
    <section class=" flex ">
        <!-- section image upload -->
        <div class=" flex justify-center items-center bg-slate-300 px-16">

            <label for="dropzone-file" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>

                <h2 class="mt-1 font-medium tracking-wide text-gray-700 ">Imagen</h2>

                <p class="mt-2 text-xs tracking-wide text-gray-500"> Cargue o suelte su archivo PNG.</p>

                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div>
        <!-- section Datos -->
        <div class=" p-5">
            <div>
                <label for="nameUbication" class="block text-sm text-gray-500">Nombre de la Ubicacion</label>

                <input type="text" placeholder="Entrada 1" class="block mt-1 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>

            <div class="mt-5">
                <label for="typeUbication" class="block mb-2 text-sm font-medium text-gray-900">Seleccione el tipo de ubicacion</label>

                <select id="typeUbication" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                <!-- <option selected> Tipo de Ubicacion</option> -->
                    <option value="US">Zonas QR</option>
                    <option value="CA">En ruta</option>
                    <option value="FR">Destino</option>
                </select>
            </div>

            <div class="mt-5">
                <label for="Locations" class="block mb-2 text-sm font-medium text-gray-900">Seleccione la Sede </label>

                <select id="locations" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                    <option value="US">Consulta externa</option>
                    <option value="CA">Torre H</option>
                    <option value="FR">Torre A</option>
                </select>
            </div>

            <div class="mt-5">
                <label for="floor" class="block mb-2 text-sm font-medium text-gray-900">Seleccione el Piso </label>

                <select id="floor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -m-1">
                    <option value="US">1</option>
                    <option value="CA">2</option>
                    <option value="FR">3</option>
                </select>
            </div>

            <div class="mt-5">
                <label for="Description" class="block text-sm text-gray-500">Description</label>

                <textarea placeholder="lorem..." class="block mt-1 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "></textarea>
            </div>

        </div>
    </section>

</template>