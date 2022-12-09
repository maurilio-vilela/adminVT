<script lang="ts">
    let user = { loggedIn: false };
	import Login from "../components/Login.svelte";
</script>

<main>
    {#if user.loggedIn}

    {/if}
    {#if !user.loggedIn}
    <Login />
    {/if}
</main>

<style>
    :global body{ background-color: #454D55; }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 95vh;
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }
</style>