<script>
	import { page } from "$app/stores";

	let currentPage = $derived($page.url.pathname);
</script>

{#if currentPage != "/"}
	<footer
		class="flex flex-col-reverse items-center justify-evenly gap-4 p-8 text-center sm:flex-row"
	>
		<!-- start of github links -->
		<div class="flex flex-col items-center justify-center sm:items-start">
			<!-- start of developer -->
			<p class="font-bold text-zinc-400">
				developed by
				<a
					href="/"
					class="font-black tracking-wide text-violet-200 hover:text-[#E1D8EF] hover:underline"
				>
					kyaruwo
				</a>
			</p>
			<!-- end of developer -->

			<!-- start of sourcecode -->
			<a
				href="https://github.com/kyaruwo/kyaruwo.dev"
				target="_blank"
				class="flex flex-row items-center font-black text-zinc-200 hover:text-white hover:underline"
			>
				sourcecode
			</a>
			<!-- end of sourcecode -->
		</div>
		<!-- end of github links -->

		<!-- start of email -->
		<div class="flex flex-col items-center justify-center sm:items-end">
			<p class="font-bold text-zinc-400">email</p>
			<a
				href="mailto:dm@kyaruwo.dev"
				class="font-black text-zinc-200 hover:text-white hover:underline"
			>
				dm@kyaruwo.dev
			</a>
		</div>
		<!-- end of email -->
	</footer>
{/if}
