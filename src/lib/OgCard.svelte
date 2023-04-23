<script lang="ts">
	import { bookmarks } from '$lib/stores/bookmarks';
	import type { OgImage } from '../app';

	export let requestUrl: string;
	export let ogUrl = requestUrl;
	export let ogTitle: string;
	export let ogDescription: string;
	export let ogImage: OgImage;

	$: props = { ogUrl, ogTitle, ogDescription, ogImage, requestUrl };
</script>

<div>
	<pre>{JSON.stringify(props, null, 2)}</pre>
	<button type="button" on:click={() => bookmarks.remove(requestUrl)}>Delete </button>
</div>
