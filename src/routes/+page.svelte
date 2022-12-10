<script lang="ts">
    let user = { loggedIn: true };
	import Home from "../components/Home.svelte";
	import Login from "../components/Login.svelte";
</script>

<main>
    {#if user.loggedIn}
    <Home />
    {/if}
    {#if !user.loggedIn}
    <Login />
    {/if}
</main>

<style>
    :global body{ background-color: #454D55; margin:0; padding:0; }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }
</style>