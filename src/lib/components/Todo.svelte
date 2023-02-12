<script>
// @ts-nocheck
    import {todos} from "$lib/stores/todoStore.js";
    import { onMount } from 'svelte';

    export let todo = "";

    let taskSts = "Not Done"
    if (todo.IsCompleted == true){
        taskSts = "Done";
    }

</script>

{#each $todos as todo (todo.id)}
    <p>Task : {todo.tasks} and is {taskSts}</p>
    {:else}
    <p>Loading...</p>
{/each}