<template>
    <div class="h-[80vh]" >
        <div class="flex justify-center items-start h-[5vh]">
            <h3 class=" text-follow text-xl"> Destinos mas buscados </h3>
        </div>
        <div class=" grid h-[75vh]">
            <div class="grid justify-items-center content-start gap-y-1 overflow-y-auto">
                <itemMostSearch :nombre="'Centro Internacional'"/>
                <itemMostSearch :nombre="'Centro Internacional'"/>
                <itemMostSearch :nombre="'Centro Internacional'"/>
                <itemMostSearch :nombre="'Centro Internacional'"/>

                <!-- <itemMostSearch>
                    <span> Medicina Nuclear</span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Admisiones </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Caja Torre D </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Odontologia </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Chequeo Medico Especializado </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Punto Donacion Sangre </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Mamografia </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Starbucks </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Cajas salas de Espera Torre 1 </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Cajas salas de Espera Torre 1 </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Cajas salas de Espera Torre 1 </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Cajas salas de Espera Torre 1 </span>
                </itemMostSearch>
                <itemMostSearch>
                    <span> Cajas salas de Espera Torre 1 </span>
                </itemMostSearch> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import itemMostSearch from './itemMostSearch.vue';
</script>