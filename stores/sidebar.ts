import { ref } from 'vue';
import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebar', () => {
    
  const currentSelection = ref('');
  
  function setSelection(selection: string) {

    currentSelection.value = selection;
    console.log('store', currentSelection.value);      
  }

  return { currentSelection, setSelection };
});