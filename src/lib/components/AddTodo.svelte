<script>
    import supabase from "$lib/db";
    let tasks = "";

    export const AddTasks = async () => {
        const { data, error } = await supabase
        .from('todos')
        .insert([
            { tasks: tasks }
        ]);
        update();
    }

    //CLEANUP fix prop reload ( dont window reload because slow )
    function update() {
        location.reload();
    }

</script>

<input class="w-70per br-1" type="text" bind:value={tasks} >
<button class="br-1 bg-gray black bold" on:click={AddTasks}>Add Task</button>