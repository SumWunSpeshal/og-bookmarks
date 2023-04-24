<script lang="ts">
	import Skeleton from '$lib/Skeleton.svelte';
	import type { ImageObject } from 'open-graph-scraper/dist/lib/types';

	export let ogImage: ImageObject;
	export let ogTitle: string;
	export let requestUrl: string;
	export let isLoading = true;

	$: imageUrl = ogImage?.url.startsWith('/')
		? new URL(ogImage?.url, requestUrl).href
		: ogImage?.url;

	let isLoadingImage = true;

	function setIsLoading() {
		isLoadingImage = false;
	}
</script>

<div class="image">
	{#if isLoading}
		<img src="placeholder.jpg" alt="Placeholder Image" />
	{:else if imageUrl}
		<img src={imageUrl} alt={ogTitle} on:load={setIsLoading} />
	{:else}
		<img src="placeholder.jpg" alt="Placeholder Image" on:load={setIsLoading} />
	{/if}
	<Skeleton isLoading={isLoadingImage} />
</div>

<style>
	.image {
		position: relative;
		overflow: hidden;
		flex-basis: 200px;
		flex-shrink: 0;
	}

	img {
		object-fit: cover;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 100%;
		height: 100%;
	}
</style>
