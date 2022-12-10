<script lang="ts">
    let user = { loggedIn: true };
	import Home from "../components/Home.svelte";
	import Login from "./login/+page.svelte";
</script>
<svelte:head>
	<title>AdminVT</title>
	<meta name="description" content="AdminVT - painel de administração" />
</svelte:head>

    {#if user.loggedIn}
    <Home />
    {/if}
    {#if !user.loggedIn}
    <Login />
    {/if}

<style>
    :global body{ background-color: #454D55;color: #c2c7d0; font-size: 1rem; margin:0; padding:0; }
    /*main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }*/
</style>