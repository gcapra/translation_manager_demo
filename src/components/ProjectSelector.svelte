<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { fetchProjects, fetchLocales } from './lib/api';
  import type { Project,Locale } from './lib/types';

  let projects: Project[] = [];
  let locales: Locale[] = [];
  let selectedProjectId: string = '';
  let selectedLocaleId: string = '';

  onMount(async () => {
      projects = await fetchProjects();
      if (projects.length > 0) {
          selectedProjectId = projects[0].id;
          dispatch('select', selectedProjectId);
      }
      locales = await fetchLocales();
      if (locales.length > 0) {
          selectedLocaleId = locales[0].id;
          dispatch('select', selectedLocaleId);
      }
  });

  const dispatch = createEventDispatcher();

  function handleProjectSelect() {
      dispatch('select', selectedProjectId);
  }

</script>

  <div class="p-4 bg-white shadow">
    <label for="project-selector" class="block text-sm font-medium text-gray-700">Select a project:</label>
    <select id="project-selector" bind:value={selectedProjectId} on:change={handleProjectSelect} class="mt-1 block w-6/12 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        {#each projects as project}
            <option value={project.id}>{project.name}</option>
        {/each}
    </select>
  </div>