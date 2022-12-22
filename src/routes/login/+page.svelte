<script lang="ts">
    import Input from "../../components/Input.svelte";
    import supabase from "$lib/db";
    import {goto} from "$app/navigation";
    export let title = "";
    let email = "";
    let password = "";
    let dados = [];

    async function handleLogin(){
        if (title === "Login") {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (data) {
            goto("/reservation");
        } else {
            console.log(error);
        }
        } else {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (data) {
            goto("/dashboard");
        } else {
            console.log(error);
        }
        }
    }
</script>
<svelte:head>
	<title>AdminVT - {title}</title>
	<meta name="description" content="AdminVT - Login" />
</svelte:head>
<div class="login">
    <section class="login-container">
        <section class="logo">
            <img src="src/img/logo.svg" alt="logo">
        </section>
        
        <form action="" method="post" on:submit|preventDefault={handleLogin}>
            <label for="username">Usuário</label>
            <input class="dark form-control" bind:value={email} id="username" type="text" placeholder="Nome de usuário" required/>
            <label for="password">Senha</label>
            <input class="dark form-control" bind:value={password} id="password" type="password" placeholder="Senha" required/>
            <button class="col-5 align-self-end btn btn-dark">{title}</button>
            <label for="remember">
                <input id="remember" type="checkbox" placeholder="Remember" /> 
                Lembrar-se
            </label>
            <a href="/#forgap">Esqueceu sua senha?</a>
        </form>

    </section>
</div>

<style>
    :global body{
        width: 100%;
        background-color: #454D55;
        color: #c2c7d0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
        font-size: 1rem; 
        margin:0; 
        padding:0; 
        }
	.login {
		display: flex;
		min-height: 100vh;
        justify-content: center;
        align-items: center;
        color:#c2c7d0;
	}
    .login a{
        text-decoration: none;
        color:#c2c7d0;
    }
    .login a:hover{
        color: #949494;
    }
    .login-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #343A40;
        width: 270px;
        height: 350px;
        padding: 0px 20px 15px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #161616;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 100%;        
    }
    .login-container img{
        width: 100%;
        margin-top: 0;
    }
    /*.login-container h1{
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffff;
        align-self: flex-start;
    }*/
    .login-container label{
        font-size: 0.92rem;
        font-weight: 300;
    }
    .dark{
        padding: 8px;
        border: 1px solid #6c757d;
        margin: 0px 0px 5px 0px;
        border-radius: 3px;
        background-color: #343A40;
        color: #fff;
    }
    /*.login-container input[type= submit]{
        width: 80px;
        border: 0;
        padding: 10px;
        border-radius: 3px;
        align-self: flex-end;
        cursor: pointer;
        background-color: #212529;
        border-color: #212529;
        color: #ffffff;
        font-weight: 700;
    }
    .login-container input[type= submit]:hover{
        background-color: #424649;
        border-color: #373b3e;
    }
    .login-container input[type= submit]:focus{
        box-shadow: rgb(66, 70, 73);
    }
    .login-container input[type= submit]:active{
        color: #fff;
        background-color: #4d5154;
        border-color: #373b3e;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .login-container input[type= submit]:disabled{
        color: #fff;
        background-color: #212529;
        border-color: #212529;
    }*/
</style>