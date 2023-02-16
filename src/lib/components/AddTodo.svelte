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

<div class="todo-input-container">
    <input class="todo-input" type="text" bind:value={tasks} >
    <button class="todo-input-button" on:click={AddTasks}>Add Task</button>
</div>
