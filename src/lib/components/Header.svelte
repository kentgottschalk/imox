<script>
	import { page } from '$app/stores';
</script>

<header class="absolute p-3 bg-gray-900 top-5 left-5 text-white rounded-sm w-40">
	<nav>
		<ul>
			<li class:active={$page.path === '/'} class="pb-2 underline text-center">
				<a sveltekit:prefetch href="/" class="font-bold">IMOX</a>
			</li>
			<div class="flex items-center justify-between">
				<span>Projects</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
			<li class:active={$page.path === '/projects/hobbybingo'} class="pl-3">
				<a sveltekit:prefetch href="/projects/hobbybingo">HobbyBingo</a>
			</li>
			<li class:active={$page.path === '/projects/themap'} class="pl-3">
				<a sveltekit:prefetch href="/projects/themap">TheMap</a>
			</li>
			<li class:active={$page.path === '/notes'}>
				<a sveltekit:prefetch href="/notes">Notes</a>
			</li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>
</header>
