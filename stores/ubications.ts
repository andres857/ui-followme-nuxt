import { useRuntimeConfig } from '#app';
import { ref } from 'vue';
import { defineStore } from "pinia";
import { type APIResponseUbication } from "../types/api";

export const useUbicationsStore = defineStore('ubications', () => {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    const ubications = ref<any[]>([]);

    async function fetchFloorById(idFloor: number) {
        try {
            const floor = await $fetch<any>(`${apiBase}/floors/${idFloor}`);
            return floor;
        } catch (error) {
            console.error('Error fetching floor:', error);
        }
    }

    async function fetchLocationById(idLocation: number) {
        try {
            const location = await $fetch<any>(`${apiBase}/locations/${idLocation}`);
            return location;
        } catch (error) {
            console.error('Error fetching Location:', error);
        }
    }

    async function fetchUbicationsbyType(name: string) {
        try {
            const ubicationsAPI = await $fetch<any[]>(`${apiBase}/ubications?type=${name}`);
            ubications.value = await Promise.all(ubicationsAPI.map(async (ubication) => {    
                console.log(ubication);
                            
                const floor = await fetchFloorById(ubication.id_floor);
                const location = await fetchLocationById( ubication.id_location);
                
                const data = {
                    id: ubication.id_ubication,
                    name: ubication.ubication_name,
                    imageUrl: ubication.imageUrl,
                    location: location.name,
                    floor: floor.name,
                    ubicationType: ubication.type_name
                }
                return data;
            }));

        } catch (error) {
            console.error('Error fetching ubications:', error);
        }
    }
    return { ubications, fetchUbicationsbyType };
});

export const useSearchValueStore = defineStore('searchValue', ()=>{
    const searchInput = ref('')
    return { searchInput }
});
  