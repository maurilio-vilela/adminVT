<script lang="ts">
    export let id: string;
    export let type: string;
    export let placeholder: string;
    export let required: boolean = false;
    export let light: boolean = false;
    export let dark: boolean = false;
</script>


    <input 
           class:light class:dark
           id={id} type={type} 
           placeholder={placeholder} required={required}>

<style>
    .dark{
        padding: 8px;
        border: 1px solid #6c757d;
        margin: 5px 0px 8px 0px;
        border-radius: 3px;
        background-color: #343A40;
        color: #fff;
    }
    .dark:focus{
        border: 1px solid #ced4da;
    }
    .light{
        padding: 8px;
        border: 1px solid #ced4da;
        margin: 5px 0px 8px 0px;
        border-radius: 3px;
        background-color: #f8f9fa;
        color: #343A40;
    }
    .light:focus{
        border: 1px solid #0dcaf0;
    }
</style>