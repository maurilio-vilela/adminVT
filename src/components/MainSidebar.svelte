<script lang="ts">
    import { page } from '$app/stores';
	import Input from "./Input.svelte";
    import logo from "../img/logo.svg";
    import Button from './Button.svelte';
    import perfil from "../img/maurilio.jpg";
</script>
<div class="brand-link">
    <a href="./">
        <img src={logo} alt="Vilela Tech">
    </a>
</div>
<div class="user-panel">
    <div class="image">
        <img src={perfil} alt="perfil">
    </div>
    <div class="info">
        <a href="/#profile-user">Maurílio Vilela</a>
    </div>
</div>
<div class="sidebar-search">
    <Input dark idInput="" typeInput="search" placeholderInput="Search" />
    <button><i class="fas fa-search"></i></button>
</div>
<nav>
    <ul class="sidebar">
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="dashboard">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                Dashboard
            </a>
        </li>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/#">
                <i class="nav-icon fas fa-th"></i>
                Widgets
            </a>
        </li>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/#">
                <i class="nav-icon fas fa-copy"></i>
                Layout Options
            </a>
        </li>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/#">
                <i class="nav-icon fas fa-edit"></i>
                Forms
            </a>
        </li>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/#">
                <i class="nav-icon fas fa-table"></i>
                Tables
            </a>
        </li>
    </ul>
</nav>

<style>
    .sidebar{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    }
    .sidebar li {
        padding: 0.1rem 0;
        list-style: none;
    }
    .sidebar a{
        display: flex;
        box-sizing: border-box;
        text-decoration: none;
        justify-content: flex-start;
        align-items: center;
        color: #c2c7d0;
        width: 224px;
        border-radius: 0.25rem;
        padding: 0.7rem 1rem;
    }
    .sidebar a i{
        margin-right: 10px;
    }
    .sidebar a:hover{
        background-color: #454D55;
        color: #fdfdfd;
        border-radius: 0.25rem;
    }
    .user-panel{
        display: flex;
        justify-content:space-around;
        align-items: center;
        padding-bottom: 16px;
        margin: 16px 0px;
        padding-right: 50px;
        border-bottom: 1px solid #4f5962;
    }
    .image img{
        width: 34px;
        border-radius: 50%;
    }
    .info a{
        text-decoration: none;
        color: #c2c7d0;
    }
    .info a:hover{
        color: #377ac2;
    }
    .brand-link{
        display: flex;
        height: 56px;
        box-sizing: border-box;
        padding: 13px 8px;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #4f5962;
        top:0;
        
    }
    .brand-link img{
        height: 45px;
    }
</style>