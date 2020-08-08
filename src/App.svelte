<script>
	import Tailwind from "./Tailwind.svelte"
	import ItemCard from "./ItemCard.svelte"
	import { items } from "./items"
</script>

<Tailwind />
<header class="bg-red-600 text-white shadow-md fixed top-0 w-full flex justify-between items-center">
	<div class="pl-4">
		<svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
		</svg>
	</div>
	<h1 class="font-display font-bold text-center text-4xl">Munchtime</h1>
	<div class="pr-4">
		<svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
		</svg>
	</div>
</header>
<main class="main">
	<div class="m-auto max-w-sm">
		{#each items as item}
			<ItemCard 
				name={item.name}
				maker={item.from}
				price={item.price}
				unit={item.unit}
				imageSource={item.imageSource}
			/>
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