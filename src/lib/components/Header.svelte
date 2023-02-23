<script>
    export let title = "Todo";

    // TODO buat kalau user pergi ke tab lain kita tukar tab title  
    // let docTitle = document.title;
    // window.addEventListener("blur", () => {
    //     let title = " ala ";
    // });

    // window.addEventListener("focus", () => {
    //     // document.title = docTitle;
    // });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<header>
    <div class="header-title">
        <div class="iconblue"></div>
        <p>Todo Me</p>
    </div>
</header>

