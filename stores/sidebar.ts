import { ref } from 'vue';
import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebar', () => {
    const currentSelection = ref(null);
  
    function setSelection(selection: any) {

      currentSelection.value = selection;
      console.log('store', currentSelection.value);      
    }
  
    return { currentSelection, setSelection };
});