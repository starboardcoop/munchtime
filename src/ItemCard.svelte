<script>
    import Button from "./Button.svelte"

    export let item;
</script>

<div class="rounded overflow-hidden bg-white shadow hover:shadow-lg mb-4 max-w-sm">
    <img src={item.imageSource} alt={item.name} />
    <div class="p-4 mb-4">
        <h2 class="font-display text-3xl text-red-600">{item.name}</h2>
        <div class="text-gray-500">from {item.maker}</div>
        <div>${item.price} per {item.unit}</div>
    </div>
    <div class="flex flex-col items-end">
        <Button item={item} />
    </div>
</div>