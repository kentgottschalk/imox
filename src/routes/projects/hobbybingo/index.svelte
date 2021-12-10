<script>
	import Container from '$lib/components/Container.svelte';
	import { bingosquares } from '$lib/stores/hobbybingoStore.js';

	function toogle(id) {
		$bingosquares[id].done = !$bingosquares[id].done;
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
					class={'cursor-pointer h-56 w-56 justify-center border-r border-b items-center flex border-gray-900 ' +
						(done === true && 'bg-red-500 text-white ') +
						((id === 5) | (id === 10) | (id === 15) | (id === 20) | (id === 25) && ' border-r-0 ') +
						((id === 21) | (id === 22) | (id === 23) | (id === 24) | (id === 25) && ' border-b-0 ')}
				>
					<div class="text-center p-2">
						{name}
					</div>
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
