<script>
    let selected = false;

    const toggleSelected = () => selected = !selected;
</script>

<button class="bg-red-600 hover:bg-red-700 text-white py-2 px-4" class:selected={selected} on:click={toggleSelected}>
    <svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
</button>

<style>
    .selected {
        @apply bg-blue-500;
    }

    .selected:hover {
        @apply bg-blue-600;
    }
</style>