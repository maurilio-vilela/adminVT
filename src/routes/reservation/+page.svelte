<script >
	import { onMount } from "svelte";
    import supabase from "$lib/db";
    let reservations = [];

    onMount(async() => {
        let { data, error } = await supabase.from('reservation').select('*')
        reservations = data;
        console.table(reservations);
    })

    let count = 0;
    function counter(){
        return count += 1;
    }
    function zerar(){
        return count = 0;
    }
    function edit(){
        return count = parseInt(document.getElementById('editCount')?.value)
    }
    let open = false;
    const toggle = () => (open = !open);
</script>
<div class="container">
    <div class="row">
        <h3 class="col-5 justify-content-start">Reservation</h3>
        <div class="col-3 input-group">
            <input type="search" class="form-control" placeholder="Search" />
            <button class="btn btn-secondary"><i class="fas fa-search"></i></button>
        </div>
    </div>
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th class="col-1">Data</th>
                <th class="col-2">Operadora</th>
                <th class="col-3">Nome</th>
                <th class="col-2">Origem</th>
                <th class="col-2">Destino</th>
                <th class="col-2">Ação</th>
            </tr>
        </thead>
        <tbody>
            {#each reservations as reservation}
            <tr>
                <td class="col-1">{reservation.data}</td>
                <td class="col-2">{reservation.operadora}</td>
                <td class="col-3">{reservation.name_pax}</td>
                <td class="col-2">{reservation.origin}</td>
                <td class="col-2">{reservation.destiny}</td>
                <td class="col-2">
                    <button class="btn btn-outline-primary" on:click={edit}>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-outline-danger" on:click={zerar}>
                        <i class="fa-regular fa-square-minus"></i>
                    </button>
                </td>
            </tr>
            {:else}
                <th>Erro ao retornar dados</th>
            {/each}
            <tr>
                <td class="col-1">
                    <button class="btn btn-primary" on:click={counter}>Clique</button>
                </td>
                <th class="col-2">
                    <span>{count} {count === 1 ? 'time' : 'times'}</span>
                </th>
                <td class="col-3"></td>
                <td class="col-2">
                    <input id="editCount" type="number" class="form-control" value={count} />
                </td>
                <td class="col-2"></td>
                <td class="col-2">
                    <button class="btn btn-outline-primary" on:click={edit}>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-outline-danger" on:click={zerar}>
                        <i class="fa-regular fa-square-minus"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEdit" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="modalEdit">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input id="editCount" type="number" class="form-control" value={count} />
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" >Save changes</button>
            </div>
        </div>
        </div>
    </div>
</div>

<style>

</style>