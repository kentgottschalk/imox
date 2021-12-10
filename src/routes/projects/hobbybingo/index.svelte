<script>
	import Container from '$lib/components/Container.svelte';
	import { bingosquares } from '$lib/stores/hobbybingoStore.js';

	function toogle(id) {
		$bingosquares[id].done = !$bingosquares[id].done;
	}
	function openModal() {
		console.log('MODAL');
	}
</script>

<svelte:head>
	<title>Imox - HobbyBingo</title>
</svelte:head>

<div class="background h-screen">
	<Container width="10">
		<h1 class="font-semibold italic text-4xl mb-20 text-center">MESBG Hobby Bingo 2021</h1>
		<ul class="flex flex-wrap">
			{#each $bingosquares as { id, name, done }, i}
				<li
					on:click={toogle(id - 1)}
					class={'relative cursor-pointer h-56 w-56 justify-center border-r border-b items-center flex border-gray-900 ' +
						(done === true && 'bg-red-500 text-white ') +
						((id === 5) | (id === 10) | (id === 15) | (id === 20) | (id === 25) && ' border-r-0 ') +
						((id === 21) | (id === 22) | (id === 23) | (id === 24) | (id === 25) && ' border-b-0 ')}
				>
					<div class="text-center p-2">
						{name}
					</div>
					{#if done === true}
						<div class="absolute bottom-0 right-0 p-2 z-10" on:click={openModal}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</Container>
</div>

<style>
	.background {
		background: url('./background.jpg');
	}
</style>
