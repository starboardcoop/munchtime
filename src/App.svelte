<script>
	import Tailwind from "./Tailwind.svelte"
	import ItemCard from "./ItemCard.svelte"

	const items = [
		{
			name: "Shrimp Tacos",
			from: "Rhody Mexicana",
			price: 12,
			unit: "4 tacos"
		},
		{
			name: "Clam Chowder",
			from: "Local Clam Shack",
			price: 10,
			unit: "bowl"
		},
		{
			name: "BBQ Chicken Nuggets",
			from: "Bob's BBQ",
			price: 15,
			unit: "12 nuggets"
		},
		{
			name: "Spanish Omelette",
			from: "El Restaurante Español",
			price: 10,
			unit: "tortilla"
		},
		{
			name: "California Roll",
			from: "Little Tokyo",
			price: 10.50,
			unit: "10 pieces"
		}
	]
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