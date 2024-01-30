import { ref } from 'vue';
import { defineStore } from "pinia";

export const useModalStatusStore = defineStore('createResource', () => {
    
  const modal = ref<Boolean>(false);
  
  function showModal() {
    modal.value = true;
    console.log('store show modal', modal.value);      
  }

  function hideModal() {
    modal.value = false;
    console.log('store hide modal', modal.value);      
  }

  return { modal, showModal, hideModal};
});