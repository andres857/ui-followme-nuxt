import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
  const mainSelection = ref('');
  const subSelection = ref('');
  
  function updateSelection(mainItem: string, subItem = '') {
    mainSelection.value = mainItem;
    subSelection.value = subItem;
  }

  function resetSidebarState() {
    mainSelection.value = ''; 
    subSelection.value = ''; 
  }
  return { mainSelection, subSelection, updateSelection, resetSidebarState };
});
