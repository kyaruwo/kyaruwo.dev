<script>
	const assets = import.meta.glob("$lib/assets/tech/*.svg", {
		eager: true,
		query: "?url",
		import: "default",
	});

	const icons = {};
	for (const path in assets) {
		const name = path.split("/").pop().replace(".svg", "");
		icons[name] = assets[path];
	}

	const stackoyaki = [
		{ name: "tailwindcss", description: "style" },
		{ name: "svelte", description: "UI" },
		{ name: "caddy", description: "server" },
		{ name: "go", description: "API" },
		{ name: "sqlite", description: "DB" },
	].map((tech) => ({
		name: tech.name,
		icon: icons[tech.name],
		description: tech.description,
	}));

	const technologies = [
		"githubdesktop",
		"github",
		"awslightsail",
		"cloudflare",
		"porkbun",

		"syncthing",
		"alacritty",
		"debian",
		"bash",
		"tmux",

		"python",
		"nodejs",
		"vscode",
		"air",
		"sqlitebrowser",

		"tailwindcss",
		"svelte",
		"caddy",
		"go",
		"sqlite",
	].map((name) => ({
		name: name,
		icon: icons[name],
	}));
</script>

<div class="my-16 flex flex-grow flex-col gap-24">
	<!-- start of stackoyaki -->
	<div class="flex flex-col gap-8">
		<!-- start of stackoyaki label -->
		<div class="flex flex-col items-center">
			<h2 class="text-4xl font-bold">stackoyaki</h2>
			<p class="text-zinc-400">web development stack</p>
		</div>
		<!-- end of stackoyaki label -->
		<!-- start of stackoyaki icons -->
		<div class="flex flex-row justify-evenly sm:mx-10 md:mx-20 lg:mx-40">
			{#each stackoyaki as tech}
				<div class="flex flex-col items-center">
					<img
						src={tech.icon}
						alt={tech.name}
						class="size-12 select-none hover:scale-105 sm:size-16 md:size-20 lg:size-24"
						title={tech.name}
						draggable="false"
					/>
					<p class="text-xs text-zinc-400 sm:text-sm md:text-base lg:text-lg">
						{tech.description}
					</p>
				</div>
			{/each}
		</div>
		<!-- end of stackoyaki icons -->
	</div>
	<!-- end of stackoyaki -->
	<!-- start of technologies -->
	<div class="flex flex-col gap-8">
		<!-- start of technologies label -->
		<div class="flex flex-col items-center">
			<h2 class="text-4xl font-bold">technologies</h2>
			<p class="text-zinc-400">I'm familiar with</p>
		</div>
		<!-- end of technologies label -->
		<!-- start of technologies icons -->
		<div
			class="grid grid-cols-5 justify-items-center gap-y-4 sm:mx-18 md:mx-28 lg:mx-48"
		>
			{#each technologies as tech}
				<img
					src={tech.icon}
					alt={tech.name}
					class="size-10 select-none hover:scale-105 sm:size-12 md:size-16 lg:size-20"
					title={tech.name}
					draggable="false"
				/>
			{/each}
		</div>
		<!-- end of technologies icons -->
	</div>
	<!-- end of technologies -->
</div>
