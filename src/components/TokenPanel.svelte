<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fetchTokens } from './lib/api';
  import type { Token } from './lib/types';

  export let selectedProjectId: string;

  let tokens: Token[] = [];
  let categories: Record<string, Token[]> = {};
  let expandedCategories: Record<string, boolean> = {};

  const dispatch = createEventDispatcher();

  // Reactive statement to load tokens whenever selectedProjectId changes
  $: if (selectedProjectId) {
      loadTokens();
  }

  async function loadTokens() {
      tokens = await fetchTokens(selectedProjectId);
      categories = categorizeTokens(tokens);
      // Ensure all categories are initially collapsed
      Object.keys(categories).forEach(cat => expandedCategories[cat] = false);
  }

  function categorizeTokens(tokens: Token[]) {
    return tokens.reduce<Record<string, Token[]>>((acc, token) => {
        const category = token.category || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(token);
        return acc;
    }, {});
  }

  function toggleCategory(category: string) {
      expandedCategories[category] = !expandedCategories[category];
  }

  function selectToken(token: Token) {
      dispatch('tokenSelected', token);
  }
</script>

<div class="bg-white shadow overflow-auto m-5">
  <h2 class="text-lg font-semibold">Tokens by Category</h2>
  {#each Object.keys(categories) as category}
    <button on:click={() => toggleCategory(category)} class="my-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
      {category} ({categories[category].length})
    </button>
    {#if expandedCategories[category]}
      <ul>
        {#each categories[category] as token}
          <li class="{token.translated === false ? 'bg-yellow-200' : 'bg-green-200'} p-2 hover:bg-blue-100 cursor-pointer" on:click={() => selectToken(token)}>
            {token.value}
          </li>
        {/each}
      </ul>
    {/if}
  {/each}
</div>

<style>
  /* Additional styles can be added here */
</style>
