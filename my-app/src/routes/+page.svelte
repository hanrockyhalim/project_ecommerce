<script lang="ts" >
	import ProductCard from "$lib/productCard.svelte";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>SvelteKit 1.0 Store</h1>
		</div>
		<ProductCard />
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Checkout with Stripe API</button>
		</div>
	</div>
</div>
