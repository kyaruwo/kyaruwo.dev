<script>
  import { page } from "$app/stores";
  let current_page = $page.url.pathname;
</script>

<!-- start of header -->
<header
  class="grid grid-flow-row gap-8 pt-8 md:text-xl lg:grid-flow-col lg:px-44 lg:text-2xl"
>
  <!-- start of kyaruwo -->
  {#if current_page != "/"}
    <a
      class="flex flex-row items-center justify-center gap-4 font-black tracking-widest lg:justify-start"
      href="/"
    >
      <img
        class="size-8 select-none rounded-full"
        draggable="false"
        src="/kyaneko.png"
        alt="avatar"
      />
      <span class="text-violet-200 hover:text-[#E1D8EF]">kyaruwo</span>
    </a>
  {/if}
  <!-- end of kyaruwo -->
  <!-- start of pages -->
  <div
    class="flex flex-row items-center justify-evenly font-semibold lg:justify-end lg:gap-8"
  >
    {#each ["projects", "tech", "about", "contact"] as page}
      {#if current_page != "/" + page}
        <a class="text-zinc-400 hover:text-zinc-200" href={page}>
          {page}
        </a>
      {:else}
        <a class="text-zinc-200 underline decoration-orange-400" href={page}>
          {page}
        </a>
      {/if}
    {/each}
  </div>
  <!-- end of pages -->
</header>
<!-- end of header -->
