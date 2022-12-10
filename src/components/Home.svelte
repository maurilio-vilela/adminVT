<script lang="ts">
	import NavHeader from "./NavHeader.svelte";
</script>

<aside class="main-sidebar">
    
</aside>
<section class="content-wrapper">
    <nav class="nav-header">
        <NavHeader />
    </nav>
</section> 

<style>
    .main-sidebar{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: margin-left .3s ease-in-out,width .3s ease-in-out;
        width: 250px;
        height: 100vh;
        background-color: #343A40;
        box-shadow: 0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)!important;
        z-index: 1;
    }
    .content-wrapper{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background-color: #454D55;
    }
    .nav-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 56px;
        padding: 8px;
        box-sizing: border-box;
        background-color: #343A40;
    }
</style>