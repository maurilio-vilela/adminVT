<script lang="ts">
	import { page } from '$app/stores';
</script>

<ul class="nav-header-left">
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="#contact">Contact</a>
    </li>
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/login">Login</a>
    </li>
</ul>

<ul class="nav-header-right">
    <li>
        <a href="#search">
            <i class="fas fa-search"></i>
        </a>
    </li>
    <li>
        <a href="#comments">
            <i class="far fa-comments"></i>
        </a>
    </li>
    <li>
        <a href="#notifications">
            <i class="far fa-bell"></i>
        </a>
    </li>
    <li>
        <a href="#options">
            <i class="fas fa-th-large"></i>
        </a>
    </li>
    
</ul>

<style>
    .nav-header-left{
        display: flex;
        list-style: none;
    }
    .nav-header-left li a,
    .nav-header-right li a{
        padding: 8px 16px;
        color: #8a8a8a;
        text-decoration: none;
    }
    .nav-header-left li a:hover,
    .nav-header-right li a:hover{
        color: #fdfdfd;
    }
    .nav-header-right{
        display: flex;
        list-style: none;
    }

</style>