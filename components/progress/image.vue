<template>
    <div class=" h-[74vh] grid content-center">
        <!-- Indication Section -->
        <div class="flex items-center bg-follow h-[8vh] rounded-t-xl">
            <h3 class="text-white text-2xl font-medium mx-auto">Sigue recto</h3>
        </div>
        <!-- Image -->
        <div class="relative h-[57vh]">
            <img src="https://winbox-assets.sfo3.digitaloceanspaces.com/followtest/IMG_1911.jpg" alt=""  class=" object-cover h-full w-full rounded-b-lg">

            <div class="absolute top-4 w-full flex justify-end items-center px-4 h-[50px] ">

                <div class="flex flex-col items-center justify-center bg-white w-[55px] h-[55px] rounded-xl">
                    <h4 class=" text-sm text-gray-800 pt-4">
                        Etapa
                    </h4>
                    <h4 class="text-follow text-xl font-extrabold pb-4">
                        5
                    </h4>
                </div>
            </div>

            <div class="absolute bottom-8 grid grid-cols-3 w-full">

                <div class="col-start-2 place-self-center">
                    <div class="w-28 h-28 rounded-full border-2 border-white shadow-2xl Dark-gray-blue-alpha flex justify-center items-center"> 
                        <img class="rounded-full w-full h-full" src="https://followme-assets.nyc3.cdn.digitaloceanspaces.com/flecha.svg" alt="">
                    </div>
                </div>

                <div class= " place-self-end  mr-10">
                    <h4 class="text-white text-xl font-medium">Piso 1</h4>
                </div>
            </div>
        </div>
    </div>
</template>
