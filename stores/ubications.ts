import { ref } from 'vue';
import { defineStore } from "pinia";
import { type APIResponseUbication } from "../types/api";

export const useUbicationsStore = defineStore('ubications', () => {
    const ubications = ref<APIResponseUbication[]>([]);

    async function fetchUbications() {
        try {
            const response = await fetch('http://localhost:3026/ubications');
            if (response.ok) {
                const ubicationsAPI = await $fetch<APIResponseUbication[]>('http://localhost:3026/ubications');
                ubications.value = ubicationsAPI;
            } else {
                console.error('Error fetching ubications:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching ubications:', error);
        }
    }

    return { ubications, fetchUbications };
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
  