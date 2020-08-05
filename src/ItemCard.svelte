<script>
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
        <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Order</button>
    </div>
</div>