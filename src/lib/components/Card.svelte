<script>
	export let color = 'bg-gray-900 text-white';
	export let title = 'default';
	export let subtitle = 'default';
	export let image = 'default';
	export let link = 'default';
</script>

<div class={'px-8 py-16 rounded-sm ' + color}>
	{title}{subtitle}{image}{link}
</div>
