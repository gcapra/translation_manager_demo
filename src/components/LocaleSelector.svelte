<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import {  fetchLocales } from './lib/api';
    import type {Locale } from './lib/types';
  
    let locales: Locale[] = [];
    let selectedLocaleId: string = '';
  
    onMount(async () => {
        locales = await fetchLocales();
        if (locales.length > 0) {
            selectedLocaleId = locales[0].id;
            dispatch('select', selectedLocaleId);
        }
    });
  
    const dispatch = createEventDispatcher();

    function handleLocaleSelect() {
        dispatch('select', selectedLocaleId);
    }

  </script>
  
    <div class="p-4 bg-white shadow">
      <label for="project-selector" class="block text-sm font-medium text-gray-700">Select a locale:</label>
      <select id="project-selector" bind:value={selectedLocaleId} on:change={handleLocaleSelect} class="mt-1 block w-6/12 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          {#each locales as locale}
              <option value={locale.id}>{locale.caption}</option>
          {/each}
      </select>
    </div>
 
