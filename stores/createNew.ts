import { useRuntimeConfig } from '#app';
import { ref } from 'vue';
import { defineStore } from "pinia";

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