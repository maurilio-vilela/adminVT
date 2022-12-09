<script lang="ts">
    export let idInput: string;
    export let typeInput: string;
    export let placeholderInput: string;
    export let requiredInput: boolean = false;
    export let light: boolean = false;
    export let dark: boolean = false;
</script>


    <input 
           class:light class:dark
           id={idInput} type={typeInput} 
           placeholder={placeholderInput} required={requiredInput}>

<style>
    .dark{
        padding: 10px;
        border: 1px solid #6c757d;
        margin: 5px 0px 10px 0px;
        border-radius: 3px;
        background-color: #343A40;
        color: #fff;
    }
    .light{
        padding: 10px;
        border: 1px solid #ced4da;
        margin: 5px 0px 10px 0px;
        border-radius: 3px;
        background-color: #f8f9fa;
        color: #343A40;
    }
    .light:focus{
        border: 1px solid #0dcaf0;
    }
</style>