<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import Container from '$lib/components/Container.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Container>
	<h1 class="font-semibold italic text-4xl mb-10">About - Random Webdev Projects & Notes</h1>
	<p>Basically a place to play with different webdev technologies and store random notes.</p>
	<p>In the first place mainly sveltekit focused.</p>
	<p><span class="font-bold">Imox</span> is a long lost WOW warlock aka a random name.</p>
	<img src="/images/warlock.webp" alt="Warlock" />
</Container>
