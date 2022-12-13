<script lang="ts">
	
</script>

<div class="app">
	

	<main>
		<slot />
	</main>


</div>

<style>
    :global(body){
        width: 100%;
        background-color: #454D55;
        color: #c2c7d0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
        font-size: 1rem; 
        margin:0; 
        padding:0; 
        }
	:global(a){
		color:#c2c7d0;
		text-decoration: none;
	}
	.app {
		display: flex;
		min-height: 100vh;
        justify-content: center;
        align-items: center;
	}

	main {
		display: flex;
        width: 100%;
		padding: 0;
		box-sizing: border-box;
        justify-content: center;
        align-items: center;
	}

	/* footer {
		display: flex;
        width: 100%;
        background-color: #c2c7d0;
		justify-content: center;
		align-items: center;
        bottom: 0;
	}

	footer a {
        text-decoration: none;
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}*/
</style>
