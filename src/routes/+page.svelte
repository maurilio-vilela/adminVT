<script lang="ts">
	import Login from "../components/Login.svelte";
</script>

<main>
    <Login />
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