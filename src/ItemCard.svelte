<script>
    import Button from "./Button.svelte"

    export let name;
    export let maker;
    export let price;
    export let unit;
</script>

<div class="rounded overflow-hidden bg-white shadow hover:shadow-lg mb-4 max-w-sm">
    <img src="/images/burger.jpg" alt="Burger" />
    <div class="p-4 mb-4">
        <h2 class="font-display text-2xl text-red-600">{name}</h2>
        <div class="text-gray-500">from {maker}</div>
        <div>${price} per {unit}</div>
    </div>
    <div class="flex flex-col items-end">
        <Button text="Order" />
    </div>
</div>