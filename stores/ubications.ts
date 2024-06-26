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
            const request = await $fetch<any[]>(`${apiBase}/ubications?type=${name}`);
            console.log(request.data);
            
                ubications.value = await Promise.all( request.data.map(async ( ubication:any ) => {
                const cardInfo = {
                    id: ubication.id,
                    name: ubication.name,
                    imageUrl: ubication.imageUrl,
                    location: ubication.location.name,
                    floor: ubication.floor.name,
                    ubicationType: ubication.type.name,
                    description: ubication.Description,
                    qr: ubication.QR,
                }
                return cardInfo;
            }));
        } catch (error) {
            console.error('Error fetching ubications:', error);
        }
    }
    return { ubications, fetchUbicationsbyType };
});

export const useUbicationFormStore = defineStore('ubicationForm', () => {
    const isCreatingUbication = ref(false);
  
    function showCreateUbication() {
      isCreatingUbication.value = true;
      console.log('store', isCreatingUbication.value);
      
    }
    function hiddeCreateUbication() {
        isCreatingUbication.value = false;
    }
    function resetViewState() {
        isCreatingUbication.value = false; // o cualquier valor predeterminado
      }
    return { isCreatingUbication, showCreateUbication,hiddeCreateUbication, resetViewState };
});
  
export const useSearchValueStore = defineStore('searchValue', ()=>{
    const searchInput = ref('');
    const searchStart = ref('');
    const searchDestiny = ref('');
    return { searchInput, searchStart,searchDestiny }
});