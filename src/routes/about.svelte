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

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container mx-auto mt-10">
	<h1 class="font-semibold italic text-4xl mb-10">About - Random webdev projects</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia posuere dolor, facilisis
		luctus nulla. Nullam nunc nisi, dictum ac ligula et, consectetur ullamcorper dolor. Cras eget
		elit odio. Aliquam sed mi ligula. Ut placerat venenatis nibh a lobortis. Ut et diam facilisis,
		elementum tortor quis, commodo mi. Praesent nec tincidunt nisi. Pellentesque at rutrum nulla, eu
		lacinia urna. Aenean sit amet pharetra tellus. Mauris facilisis varius fermentum. Nullam quis
		dui eget lectus malesuada placerat eu ut lectus. Fusce quis sollicitudin ex. Ut et sem tellus.
		Vestibulum pretium finibus lectus. Curabitur porttitor urna vel suscipit lobortis. Curabitur
		egestas eget tellus sed ornare.
	</p>
	<p>
		Donec at leo eu nisi imperdiet dignissim in sit amet arcu. Sed in nibh sit amet nibh venenatis
		vestibulum in vel leo. Pellentesque et pulvinar massa. In venenatis consectetur sollicitudin.
		Vestibulum sollicitudin ex et vehicula mattis. Mauris rhoncus eu dui eu tempor. Donec non
		vestibulum nunc. Aenean vitae nisl suscipit, placerat felis ut, aliquam dui. Aliquam quis est
		sapien. Donec feugiat est convallis, laoreet tortor ac, maximus massa. Quisque nunc nisi,
		lacinia quis commodo in, mollis id quam.
	</p>
</div>
