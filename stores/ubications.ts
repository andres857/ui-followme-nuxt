import { defineStore } from "pinia";
import { type APIResponseUbication } from "../types/api";

// export const useUbicationsStore = defineStore('ubicationStore', {
//     state: () => ({
//       ubications: [] as APIResponseUbications[]
//     }),
//     actions: {
//       async getUbications() {
//         try {
//             const ubicationsAPI = await $fetch<APIResponseUbications[]>('http://localhost:3026/ubications');
//             this.ubications = ubicationsAPI;        
//         } catch (error: any) {
//             console.log(error.message);
//         }
        
//       }
//     }
// })
// stores/ubications.ts
import { ref } from 'vue';

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
})
  