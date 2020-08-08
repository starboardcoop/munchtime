<script>
	import Tailwind from "./Tailwind.svelte"
	import Bag from "./Bag.svelte"
	import ItemCard from "./ItemCard.svelte"
	import { items } from "./items"
</script>

<Tailwind />
<header class="bg-red-600 text-white shadow-md fixed top-0 w-full h-12 flex justify-between items-center">
	<div class="pl-4">
		<svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
		</svg>
	</div>
	<h1 class="font-display font-bold text-center text-4xl">Munchtime</h1>
	<Bag />
</header>
<main class="main">
	<div class="m-auto max-w-sm">
		{#each items as item}
			<ItemCard item={item} />
		{/each}
	</div>
</main>

<style>
	.main {
		width: 100vw;
		margin: 0 auto;
		margin-top: 4rem;
		padding: 1rem;
	}
</style>