<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  const stackoyaki = [
    { name: "tailwindcss", description: "style" },
    { name: "svelte", description: "frontend" },
    { name: "caddy", description: "server" },
    { name: "go", description: "backend" },
    { name: "sqlite", description: "database" },
  ];

  const technologies = [
    "porkbun",
    "cloudflare",
    "github",
    "githubdesktop",
    "vscode",
    "alacritty",
    "syncthing",
    "firefox",
    "discord",
    "godot",
    "debian",
    "android",
    "windows",
    "termux",
    "tmux",
    "caddy",
    "go",
    "sqlite",
    "json",
    "markdown",
    "nodejs",
    "npm",
    "svelte",
    "tailwindcss",
    "javascript",
    "html",
    "rust",
    "postgresql",
    "mysql",
    "python",
  ];
</script>

<Header />

<div class="my-20 flex flex-grow flex-col gap-24">
  <!-- start of stackoyaki -->
  <div class="flex flex-col gap-8">
    <!-- start of stackoyaki label -->
    <div class="flex flex-col items-center">
      <span class="text-4xl font-bold underline">stackoyaki</span>
      <p class="text-zinc-400">web development stack</p>
    </div>
    <!-- end of stackoyaki label -->
    <!-- start of stackoyaki icons -->
    <div class="flex flex-row justify-evenly sm:mx-10 md:mx-20 lg:mx-40">
      {#each stackoyaki as tech}
        <div class="flex flex-col items-center">
          <img
            class="size-12 select-none hover:scale-105 sm:size-16 md:size-20 lg:size-24"
            draggable="false"
            src="/tech-icons/{tech.name}.svg"
            alt={tech.name}
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
      <span class="text-4xl font-bold underline">technologies</span>
      <p class="text-zinc-400">I'm familiar with</p>
    </div>
    <!-- end of technologies label -->
    <!-- start of technologies icons -->
    <div
      class="grid grid-cols-5 gap-4 sm:mx-10 sm:grid-cols-10 md:mx-20 lg:mx-40"
    >
      {#each technologies as tech}
        <img
          class="size-10 select-none justify-self-center hover:scale-125 md:size-12 lg:size-14"
          draggable="false"
          src="/tech-icons/{tech}.svg"
          alt={tech}
        />
      {/each}
    </div>
    <!-- end of technologies icons -->
  </div>
  <!-- end of technologies -->
</div>

<Footer />
