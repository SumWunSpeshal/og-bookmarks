<script lang="ts">
	import ContextMenu from '$lib/ContextMenu.svelte';
	import OgImage from '$lib/OgImage.svelte';
	import Skeleton from '$lib/Skeleton.svelte';
	import { bookmarks } from '$lib/stores/bookmarks';
	import type { OgObject } from 'open-graph-scraper/dist/lib/types';

	export let isLoading = true;
	export let requestUrl = '';
	export let ogTitle = '';
	export let ogDescription = '';
	export let ogImage: OgObject['ogImage'] = undefined;

	$: hostname = new URL(requestUrl).hostname;
</script>

<div class="card" class:isLoading>
	<a class="link" href={requestUrl} target="_blank">
		<div class="text">
			<h2>
				<strong>
					{#if isLoading}
						Lorem ipsum dolor sit amet
					{:else}
						{ogTitle || hostname}
					{/if}
				</strong>
				<Skeleton {isLoading} />
			</h2>
			<p>
				{#if isLoading}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci at doloremque fuga
					nesciunt nobis quaerat, voluptates.
				{:else}
					{ogDescription || ''}
				{/if}
				<Skeleton {isLoading} />
			</p>
			<small>{hostname}</small>
		</div>

		<OgImage {ogImage} {ogTitle} {requestUrl} {isLoading} />
	</a>
	<div class="context-menu">
		<ContextMenu
			onDelete={() => bookmarks.remove(requestUrl)}
			onRefresh={() => bookmarks.refresh(requestUrl)}
		/>
	</div>
</div>

<style>
	.card {
		position: relative;
		display: flex;
	}

	.link {
		flex-grow: 1;
		display: flex;
		column-gap: 1.25rem;
		max-width: 100%;
		transition: background-color 0.1s ease-in-out;
		padding: 0.75rem 1.25rem;
	}

	.link:hover {
		background-color: var(--brown-1);
	}

	.context-menu {
		position: absolute;
		z-index: 10;
		top: 0.25rem;
		right: 0.25rem;
	}

	.text h2,
	.text p {
		position: relative;
		overflow: hidden;
	}

	.text {
		flex-grow: 1;
		min-width: 0;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.text h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;

		font-size: 18px;
		margin-bottom: 0.5rem;
	}

	.text p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;

		min-height: 2.625rem;

		color: var(--stone-7);

		margin-bottom: 1rem;
	}

	.text small {
		margin-top: auto;
		min-width: 0;
		max-width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
