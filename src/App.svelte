<script lang="ts">
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import Login from './components/Login.svelte';
    import ProjectSelector from './components/ProjectSelector.svelte';
    import LocaleSelector from './components/LocaleSelector.svelte';
    import TokenPanel from './components/TokenPanel.svelte';
    import TranslationForm from './components/TranslationForm.svelte';
    import type { Token } from './components/lib/types';

    let loggedIn = false;
    let selectedProjectId: string | null = null;
    let selectedLocaleId: string | null = null;
    let selectedToken: Token | null = null;

    function handleLogin(event: CustomEvent<boolean>) {
        loggedIn = event.detail;
    }

    function handleLogout() {
        loggedIn = false;
    }

    function handleProjectSelect(event: CustomEvent<string>) {
        selectedProjectId = event.detail;
    }

    function handleLocaleSelect(event: CustomEvent<string>) {
        selectedLocaleId = event.detail;
    }

    function handleTokenSelect(event: CustomEvent<Token>) {
        selectedToken = event.detail;
    }
</script>

<style>
    /* Mobile styles */
    @media (max-width: 768px) {
        .flex {
            flex-direction: column;
        }

        .p_1_3, .p_2_3{
            width: 100%;
        }

        .space-x-2 {
            margin-left: 0;
            margin-right: 0;
        }

        .p-4 {
            padding: 16px 0; /* Adjust padding for mobile */
        }
    }
</style>

<Header {loggedIn} on:logout={handleLogout} />
{#if !loggedIn}
    <Login on:login={handleLogin} />
{:else}
    <div class="flex justify-between px-4 py-2 space-x-2">
        <div class="w-1/3 p_1_3">
            <ProjectSelector on:select={handleProjectSelect} />
        </div>
        <div class="w-2/3 p_2_3">
            <LocaleSelector on:select={handleLocaleSelect} />
        </div>
    </div>
    {#if selectedProjectId && selectedLocaleId}
        <div class="flex justify-between px-4 py-2 space-x-2">
            <div class="w-1/3 p_1_3">
                <TokenPanel {selectedProjectId} on:tokenSelected={handleTokenSelect} />
            </div>
            <div class="w-2/3 p-4 p_2_3">
                <TranslationForm {selectedToken} {selectedLocaleId} />
            </div>
        </div>
    {/if}
{/if}
<Footer />
