<script>
    import Navbar from "$lib/components/Navbar.svelte";
    let { data, children } = $props();
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    />
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        defer
    ></script>
</svelte:head>

<div class="bg-dark text-light min-vh-100">
    <Navbar />

    <main class="container py-4">
        {@render children()}
    </main>
</div>
