<script lang="ts">
    let user = { loggedIn: true };
	import Home from "../components/Home.svelte";
	import Login from "./login/+page.svelte";
</script>
<svelte:head>
	<title>AdminVT - Home</title>
	<meta name="description" content="AdminVT - painel de administração" />
</svelte:head>

    <Login title="Login"/>

<style>
    /*main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'Roboto', 'Helvetica', 'sans-serif';
    }*/
</style>