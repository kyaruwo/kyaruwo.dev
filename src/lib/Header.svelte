<script>
	let props = $props();

	import { page } from "$app/stores";
	let current_page = $page.url.pathname;

	const pages = ["projects", "tech"];
</script>

<svelte:head>
	<!-- start of title -->
	{#if current_page != "/"}
		{#if !props.title}
			<!-- dynamic --> <title>{current_page.split("/")[1]} - kyaruwo</title>
		{:else}
			<!-- custom --> <title>{props.title} - kyaruwo</title>
		{/if}
	{:else}
		<!-- default --> <title>kyaruwo</title>
	{/if}
	<!-- end of title -->
</svelte:head>

<header
	class="grid grid-flow-row gap-8 pt-8 md:text-xl lg:grid-flow-col lg:px-44 lg:text-2xl"
>
	<!-- start of kyaruwo -->
	<h1
		class="flex flex-row items-center justify-center justify-self-center lg:justify-self-start"
	>
		<a
			class="satsuyako text-2xl tracking-wide text-violet-200 hover:text-[#E1D8EF]"
			href="/"
		>
			kyaruwo
		</a>
	</h1>
	<!-- end of kyaruwo -->
	<!-- start of pages -->
	<div
		class="group flex flex-row items-center justify-evenly justify-self-center font-semibold lg:gap-8 lg:justify-self-end"
	>
		{#each pages as page}
			{#if current_page != "/" + page}
				<a
					class="w-28 text-center text-zinc-400 decoration-orange-400 hover:text-zinc-200 hover:underline"
					href="/{page}"
				>
					{page}
				</a>
			{:else}
				<a
					class="w-28 text-center text-zinc-200 underline decoration-orange-400 group-hover:text-zinc-400 group-hover:no-underline hover:text-zinc-200 hover:underline"
					href="/{page}"
				>
					{page}
				</a>
			{/if}
		{/each}
	</div>
	<!-- end of pages -->
</header>
