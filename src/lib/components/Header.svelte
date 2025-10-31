<script>
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";

	const pages = ["projects", "tech"];
	let currentPage = $derived($page.url.pathname);
</script>

<svelte:head>
	<!-- start of title -->
	{#if currentPage != "/"}
		{#if currentPage != "/404"}
			<!-- dynamic --> <title>{currentPage.split("/")[1]} - kyaruwo</title>
		{:else}
			<!-- 404 --> <title>404 Not Found - kyaruwo</title>
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
			href="/"
			class="satsuyako text-2xl tracking-wide text-violet-200 hover:text-[#E1D8EF]"
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
			{#if currentPage != "/" + page}
				<a
					href="/{page}"
					class="w-28 text-center text-zinc-400 decoration-orange-400 hover:text-zinc-200 hover:underline"
				>
					{page}
				</a>
			{:else}
				<a
					href="/{page}"
					class="w-28 text-center text-zinc-200 underline decoration-orange-400 group-hover:text-zinc-400 group-hover:no-underline hover:text-zinc-200 hover:underline"
				>
					{page}
				</a>
			{/if}
		{/each}
	</div>
	<!-- end of pages -->
</header>
