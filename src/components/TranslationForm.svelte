<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { saveTranslation, fetchTranslations } from './lib/api';
  import type { Token } from './lib/types.js';

  export let selectedToken: Token | null = null;
  export let selectedLocaleId: string | null = null;

  let translation = '';
  let originalText = '';  // Maintain this to handle original text from the token

  const dispatch = createEventDispatcher();

  // Reactive statement for handling selectedToken changes
  $: if (selectedToken) {
      originalText = selectedToken.value;
      if (selectedLocaleId) {
          fetchTranslations(selectedToken.id, selectedLocaleId).then(data => {
              translation = data.translation;
          });
      }
  } else {
      originalText = '';  // Reset when no token is selected
  }

  async function submitTranslation() {
      if (selectedToken && translation && selectedLocaleId) {
          try {
              await saveTranslation(
                  selectedToken.id,
                  selectedLocaleId,
                  translation
              );
              dispatch('translationSaved');
              translation = ''; // Reset after saving
          } catch (error) {
              console.error('Error saving translation:', error);
          }
      } else {
          console.error('Missing token, translation, or locale information');
      }
  }
</script>

<div class="bg-white shadow rounded-lg mt-3">
  <h2 class="font-semibold">Translate Token</h2>
  <label for="originalText" class="block text-sm font-medium text-gray-700 py-2">Original Text</label>
  <textarea id="originalText" rows="3" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" readonly bind:value={originalText}></textarea>

  <label for="translationInput" class="block text-sm font-medium text-gray-700 py-2">Translation</label>
  <textarea id="translationInput" rows="3" bind:value={translation} class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="Enter translation here..."></textarea>
  <br>
  <button type="button" on:click={submitTranslation} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      Save Translation
  </button>
  <button type="button" on:click={submitTranslation} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Auto-translate with AI
</button>
  <br><br>
</div>

<br>
<style>
  /* Additional styling can go here */
</style>
