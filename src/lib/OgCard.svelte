<script lang="ts">
	import { bookmarks } from '$lib/stores/bookmarks';
	import type { OgImage } from '../app';
	import ContextMenu from '$lib/ContextMenu.svelte';

	export let requestUrl: string;
	export let ogUrl = requestUrl;
	export let ogTitle: string;
	export let ogDescription: string;
	export let ogImage: OgImage;
</script>

<div class="card">
	<a class="link" href={requestUrl}>
		<div class="text">
			<h2>
				<strong>
					{ogTitle}
				</strong>
			</h2>
			<p>{ogDescription}</p>
			<small>{ogUrl}</small>
		</div>
		<div class="image">
			<img src={ogImage?.url} alt={ogTitle} />
		</div>
	</a>
	<div class="context-menu">
		<ContextMenu onDelete={() => bookmarks.remove(requestUrl)} />
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
		transition: background-color 0.1s ease-in-out;
	}

	.link:hover {
		background-color: white;
	}

	.context-menu {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
	}

	.text {
		flex-grow: 1;

		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
	}

	.text p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;

		margin-bottom: 1rem;
	}

	.text small {
		margin-top: auto;
	}

	.image {
		position: relative;
		flex-basis: 200px;
		flex-shrink: 0;
	}

	.image img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>
