<script lang="ts">
    
</script>

<section class="login">
    <section class="logo">
        <img src="src/img/logo.svg" alt="logo">
    </section>
    <h1>Login</h1>
    <form action="" method="post">
        <label for="username">Usuário</label>
        <input id="username" type="text" placeholder="Nome de usuário" required>
        <label for="password">Senha</label>
        <input id="password" type="password" placeholder="Senha" required>
        <input type="submit" value="Entrar">
    </form>
</section>

<style>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #161B22;
        width: 200px;
        height: 300px;
        padding: 0px 20px 15px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #161616;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #575f6b;
    }
    .login img{
        width: 100%;
        margin-top: 0;
    }
    .login h1{
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffff;
        align-self: flex-start;
    }
    .login label{
        font-size: 0.92rem;
        font-weight: 300;
    }
    .login input[type= text],
    .login input[type= password]{
        padding: 10px;
        border: 0;
        margin: 5px 0px 10px 0px;
        border-radius: 3px;
        background-color: #39424e;
        color: #fff;
    }
    .login input[type= submit]{
        width: 80px;
        border: 0;
        padding: 5px;
        border-radius: 3px;
        align-self: flex-end;
        cursor: pointer;
        background-color: #2c323a;
        color: #ffffff;
        font-weight: 700;
    }
    .login input[type= submit]:hover{
        background-color: #3a414b;
    }
</style>