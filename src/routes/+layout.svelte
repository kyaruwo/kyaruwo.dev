<script>
	import "../app.css";

	import kyaneko from "$lib/assets/kyaneko.png";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={kyaneko} />
</svelte:head>

{@render children?.()}
