<script>
	const bingosquares = [
		{ id: 1, name: 'Paint a Monster or Siege Engine' },
		{ id: 2, name: 'Paint a Monster or Siege Engine' },
		{ id: 3, name: 'Paint a Monster or Siege Engine' },
		{ id: 4, name: 'Paint a Monster or Siege Engine' },
		{ id: 5, name: 'Paint a Monster or Siege Engine' },
		{ id: 6, name: 'Paint a Monster or Siege Engine' },
		{ id: 7, name: 'Paint a Monster or Siege Engine' },
		{ id: 8, name: 'Paint a Monster or Siege Engine' },
		{ id: 9, name: 'Paint a Monster or Siege Engine' },
		{ id: 10, name: 'Paint a Monster or Siege Engine' },
		{ id: 11, name: 'Paint a Monster or Siege Engine' },
		{ id: 12, name: 'Paint a Monster or Siege Engine' },
		{ id: 13, name: 'Paint a Monster or Siege Engine' },
		{ id: 14, name: 'Paint a Monster or Siege Engine' },
		{ id: 15, name: 'Paint a Monster or Siege Engine' },
		{ id: 16, name: 'Paint a Monster or Siege Engine' },
		{ id: 17, name: 'Paint a Monster or Siege Engine' },
		{ id: 18, name: 'Paint a Monster or Siege Engine' },
		{ id: 19, name: 'Paint a Monster or Siege Engine' },
		{ id: 20, name: 'Paint a Monster or Siege Engine' },
		{ id: 21, name: 'Paint a Monster or Siege Engine' },
		{ id: 22, name: 'Paint a Monster or Siege Engine' },
		{ id: 23, name: 'Paint a Monster or Siege Engine' },
		{ id: 24, name: 'Paint a Monster or Siege Engine' },
		{ id: 25, name: 'Paint a Monster or Siege Engine' }
	];
</script>

<div class="background h-screen">
	<div class="container mx-auto">
		<ul class="grid grid-cols-5 border border-white">
			{#each bingosquares as { id, name }, i}
				<li class="w-full h-0 pb-full relative border">
					<span class="absolute p-2 top-50">
						{name}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.background {
		background: url('./oldpaper.jpg');
	}
</style>
