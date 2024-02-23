import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
  const mainSelection = ref('');
  const subSelection = ref('');
  const createNewResource = ref(false);
  const currentSelection = ref('');

  function updateSelection(mainItem: string, subItem = '') {
    mainSelection.value = mainItem;
    subSelection.value = subItem;
  }

  function resetSidebarState() {
    mainSelection.value = ''; 
    subSelection.value = '';
    createNewResource.value = false;
  }

  function showCreateResource(){
    createNewResource.value = true;
    console.log('Store SideBar - create resource', createNewResource.value, currentSelection.value);
  }

  return { mainSelection, subSelection, updateSelection, resetSidebarState, showCreateResource, createNewResource,currentSelection };
});
