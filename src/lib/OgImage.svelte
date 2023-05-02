<script lang="ts">
	import Skeleton from '$lib/Skeleton.svelte';
	import type { OgObject } from 'open-graph-scraper/dist/lib/types';

	export let ogImage: OgObject['ogImage'];
	export let ogTitle: string;
	export let requestUrl: string;
	export let isLoading = true;

	$: imageUrl = () => {
		if (Array.isArray(ogImage) || typeof ogImage === 'string') {
			return null;
		}
		
		return ogImage?.url.startsWith('/') ? new URL(ogImage?.url, requestUrl).href : ogImage?.url;
	};

	let isLoadingImage = true;

	function setIsLoading() {
		isLoadingImage = false;
	}
</script>

<div class="image">
	{#if isLoading}
		<img src="placeholder.jpg" alt="Placeholder" />
	{:else if imageUrl()}
		<img src={imageUrl()} alt={ogTitle} on:load={setIsLoading} />
	{:else}
		<img src="placeholder.jpg" alt="Placeholder" on:load={setIsLoading} />
	{/if}
	<Skeleton isLoading={isLoadingImage} />
</div>

<style>
	.image {
		position: relative;
		overflow: hidden;
		flex-basis: 170px;
		flex-shrink: 0;
		outline: 2px solid var(--sand-3);
		outline-offset: 4px;
	}

	.image:after {
		/*content: '';*/

		position: absolute;
		inset: 0;

		background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
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
