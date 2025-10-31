<script>
	import "../app.css";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import kyaneko from "$lib/assets/kyaneko.png";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={kyaneko} />
</svelte:head>

<Header />

{@render children?.()}

<Footer />
