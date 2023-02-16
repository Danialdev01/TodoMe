<script>
    import {todos} from "$lib/stores/todoStore.js";

    export let todo = "";

</script>

{#each $todos as todo (todo.id)}
    <!-- <p>Task : {todo.tasks} and is {taskSts}</p> -->
    <div class="todo-item-container">
        <div class="todo-container">
            <div class="todo flex">
                <p class="w-100per white">{todo.tasks}</p>
                {#if todo.IsCompleted}
                    <p class="w-100per white">Done</p>
                {:else if !todo.IsCompleted}
                    <p class="w-100per white">Not Done</p>
                {:else}
                {/if}
                <div class="delete-todo-button-container p-2">
                    <button class="delete-todo-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    {:else}
    <p>Loading...</p>
{/each}