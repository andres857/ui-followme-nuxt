import { ref } from 'vue';
import { defineStore } from "pinia";
import { type APIResponseUbication } from "../types/api";

export const useUbicationsStore = defineStore('ubications', () => {
    const ubications = ref<APIResponseUbication[]>([]);

    async function fetchUbicationsbyType(name: string) {
        try {
            const response = await fetch(`http://localhost:3026/ubications?type=${name}`);
            console.log('request endpoint', name);
            
            if (response.ok) {
                console.log('content', response);
                
                const ubicationsAPI = await $fetch<APIResponseUbication[]>(`http://localhost:3026/ubications?type=${name}`);
                ubications.value = ubicationsAPI;
            } else {
                console.error('Error fetching ubications:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching ubications:', error);
        }
    }

    async function fetchTypesUbication() {
        try {
            const response = await fetch(`http://localhost:3026/type-ubications`);
            console.log('request endpoint typeubications');
            
            if (response.ok) {
                const typeUbicationAPI = await $fetch<APIResponseUbication[]>(`http://localhost:3026/type-ubications/`);
                ubications.value = typeUbicationAPI;
            } else {
                console.error('Error fetching ubications:', response.statusText);
            }
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

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
    function decrement() {
        count.value--
    }
  
    return { count, name, doubleCount, increment, decrement }
});
  