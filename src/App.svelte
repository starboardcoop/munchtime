<script>
	import Tailwind from "./Tailwind.svelte"
	import ItemCard from "./ItemCard.svelte"
	import { items } from "./items"
</script>

<Tailwind />
<header class="bg-red-600 shadow-md fixed top-0 w-full">
	<h1 class="font-display font-bold text-center text-4xl text-white">Munchtime</h1>
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