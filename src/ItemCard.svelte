<script>
    import Button from "./Button.svelte"

    export let name;
    export let maker;
    export let price;
    export let unit;
</script>

<div class="p-4 rounded bg-white shadow hover:shadow-md mb-4 max-w-sm">
    <div class="mb-4">
        <h2 class="font-display text-2xl text-red-600">{name}</h2>
        <div class="text-gray-500">from {maker}</div>
        <div>${price} per {unit}</div>
    </div>
    <div>
        <Button text="Order" />
    </div>
</div>