<script lang="ts">
    import { Button, Row } from 'sveltestrap';
    import Input from "../../components/Input.svelte";
</script>
<svelte:head>
	<title>AdminVT - Login</title>
	<meta name="description" content="AdminVT - Login" />
</svelte:head>
<div class="login">
    <section class="login-container">
        <section class="logo">
            <img src="src/img/logo.svg" alt="logo">
        </section>
        
        <form action="" method="post">
            <label for="username">Usuário</label>
            <Input dark id="username" type="text" placeholder="Nome de usuário" required/>
            <label for="password">Senha</label>
            <Input dark id="password" type="password" placeholder="Senha" required/>
            <Button class="col-5 align-self-end" color="dark">Entrar</Button>
            <label for="remember">
                <Input dark id="remember" type="checkbox" placeholder="Remember" /> 
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
        color: #575f6b;
	}
    .login a{
        text-decoration: none;
        color: #575f6b;
    }
    .login a:hover{
        color:#c2c7d0;
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