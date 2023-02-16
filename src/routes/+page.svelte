<script>
    import Todo from "$lib/components/Todo.svelte";
    import AddTodo from "$lib/components/AddTodo.svelte";
    import Header from "$lib/components/Header.svelte";
    import SideNav from "$lib/components/SideNav.svelte";
</script>

<div class="flex" style="padding: 0;" >
    <SideNav />
    <div class="w-100per" style="padding: 0;">
        <Header title="Todo App" />
        <div class="main-container">
            <div class="add-todo-component-container pb-3">
                <AddTodo/>
            </div>
            <Todo />
        </div>
    </div>
</div>

<style>
    @import "../assets/css/main.css";
</style>