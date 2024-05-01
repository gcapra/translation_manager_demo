<script lang="ts">
    let email = "";
    let password = "";
    let errorMessage = "";
  
    // Simulated login function (replace with your actual auth API call)
    async function login() {
      try {
        // Example: await auth.login(email, password);
        console.log("Logging in:", email, password);
        // Simulate successful login
        if (email === "user@example.com" && password === "123") {
          console.log("HELLO MOTO")
          dispatch('login', true);
        } else {
          console.log("HELLO ROLA");
          throw new Error("Invalid credentials");
        }
      } catch (errorMessage) {
        errorMessage = errorMessage;
      }
    }
  
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  </script>
  
  <div class="min-h-screen flex items-center justify-center">
    <div class="p-8 border rounded-lg max-w-md w-full space-y-8 bg-white shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        {#if errorMessage}
          <p class="text-red-500 text-xs italic">{errorMessage}</p>
        {/if}
      </div>
      <form class="mt-8 space-y-6" on:submit|preventDefault={login}>
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" bind:value={email}>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" bind:value={password}>
          </div>
        </div>
  
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  
  <style>
    /* Additional styling can go here */
  </style>  