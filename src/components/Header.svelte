<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let loggedIn = false; // Accept loggedIn as a prop
  const dispatch = createEventDispatcher();

  function logout() {
    dispatch('logout');
  }
</script>

<nav class="bg-blue-600 shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <h1 class="header_title text-white rounded-md font-medium"><a href="./">Translation Manager</a></h1>
      {#if loggedIn}
        <button 
          class="ml-auto p-1 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
          on:click={logout}
        >
          Logout
        </button>
      {/if}
    </div>
  </div>
</nav>

<style>
.header_title {
  font-size: 1.5em;
}
</style>
