<script>
    import Todo from "$lib/components/Todo.svelte";
    import AddTodo from "$lib/components/AddTodo.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="main-container">
    <AddTodo />
    <center>
        <Todo />
    </center>
</div>

<style>
    @import "../assets/css/main.css";
</style>