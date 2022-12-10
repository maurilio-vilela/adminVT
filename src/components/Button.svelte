<script lang="ts">
    export let value: string;
    export let type: string;
    export let btn: boolean = false;
    export let success: boolean = false;
    export let primary: boolean = false;
    export let secondary: boolean = false;
    export let danger: boolean = false;
    export let warning: boolean = false;
    export let info: boolean = false;
    export let light: boolean = false;
    export let dark: boolean = false;
</script>

<button  class:success class:primary 
        class:secondary class:danger 
        class:warning class:info 
        class:light class:dark 
        class:btn
        value={value} type={type} />

<style>
    .btn{
        margin: 0.25rem 0.125rem;
        cursor: pointer;
        border: 0;
        padding: 0.375rem 0.75rem;
        font-size: 0.92rem;
        border-radius: 0.375rem;
        font-weight: 400;
        line-height: 1.5;
        border-width: 1px;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        vertical-align: middle;
        display: inline-block;
    }
    .primary {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
}
    .primary:hover{
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }
    .primary:focus{
        box-shadow: rgb(49, 132, 253);
    }
    .primary:active{
        color: #fff;
        background-color: #0a58ca;
        border-color: #0a53be;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .primary:disabled{
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    .secondary {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
    .secondary:hover{
        color: #fff;
        background-color: #5c636a;
        border-color: #565e64;
    }
    .secondary:focus{
        box-shadow: rgb(130, 138, 145);
    }
    .secondary:active{
        color: #fff;
        background-color: #565e64;
        border-color: #51585e;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .secondary:disabled{
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
    .success{
        color: #fff;
        background-color: #198754;
        border-color: #198754;
    }
    .success:hover{
        color: #fff;
        background-color: #157347;
        border-color: #146c43;
    }
    .success:focus{
        box-shadow: rgb(60, 153, 110);
    }
    .success:active{
        color: #fff;
        background-color: #146c43;
        border-color: #13653f;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .success:disabled{
        color: #fff;
        background-color: #198754;
        border-color: #198754;
    }
    .info{
        color: #000;
        background-color: #0dcaf0;
        border-color: #0dcaf0;
    }
    .info:hover{
        color: #000;
        background-color: #31d2f2;
        border-color: #25cff2;
    }
    .info:focus{
        box-shadow: rgb(11, 172, 204);
    }
    .info:active{
        color: #000;
        background-color: #3dd5f3;
        border-color: #25cff2;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .info:disabled{
        color: #000;
        background-color: #0dcaf0;
        border-color: #0dcaf0;
    }
    .warning {
        color: #000;
        background-color: #ffc107;
        border-color: #ffc107;
    }
    .warning:hover{
        color: #000;
        background-color: #ffca2c;
        border-color: #ffc720;
    }
    .warning:focus{
        box-shadow: rgb(217, 164, 6);
    }
    .warning:active{
        color: #000;
        background-color: #ffcd39;
        border-color: #ffc720;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .warning:disabled{
        color: #000;
        background-color: #ffc107;
        border-color: #ffc107;
    }
    .danger {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }
    .danger:hover{
        color: #fff;
        background-color: #bb2d3b;
        border-color: #b02a37;
    }
    .danger:focus{
        box-shadow: rgb(225, 83, 97);
    }
    .danger:active{
        color: #fff;
        background-color: #b02a37;
        border-color: #a52834;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .danger:disabled{
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }
    .light {
        color: #000;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }
    .light:hover{
        color: #000;
        background-color: #d3d4d5;
        border-color: #c6c7c8;
    }
    .light:focus{
        box-shadow: rgb(211, 212, 213);
    }
    .light:active{
        color: #000;
        background-color: #c6c7c8;
        border-color: #babbbc;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .light:disabled{
        color: #000;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }
    .dark {
        color: #fff;
        background-color: #212529;
        border-color: #212529;
    }
    .dark:hover{
        color: #fff;
        background-color: #424649;
        border-color: #373b3e;
    }
    .dark:focus{
        box-shadow: rgb(66, 70, 73);
    }
    .dark:active{
        color: #fff;
        background-color: #4d5154;
        border-color: #373b3e;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .dark:disabled{
        color: #fff;
        background-color: #212529;
        border-color: #212529;
    }
</style>