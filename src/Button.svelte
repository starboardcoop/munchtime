<script>
    let selected = false;

    const toggleSelected = () => selected = !selected;
</script>

<button class="bg-red-600 hover:bg-red-700 text-white py-2 px-4" class:selected={selected} on:click={toggleSelected}>
    <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" class:hidden={selected}>
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
    <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" class:hidden={!selected}>
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
</button>

<style>
    .selected {
        @apply bg-green-500;
    }

    .selected:hover {
        @apply bg-green-600;
    }

    .hidden {
        @apply hidden;
    }
</style>