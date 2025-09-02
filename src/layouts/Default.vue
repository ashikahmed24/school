<script setup>

</script>


<template>
    <div class="h-screen">

        <header>
            <p>Header</p>
        </header>

        <aside>
            <p>Sidebar</p>
        </aside>

        <main class="bg-gray-200">
            <slot />
        </main>

        <footer>
            <p>Footer</p>
        </footer>

    </div>
</template>