<script lang="ts">
	import { bookmarks, ogBookmarks } from '$lib/stores/bookmarks';
	import AddForm from '$lib/AddForm.svelte';
	import OgCard from '$lib/OgCard.svelte';

	let inputRef: HTMLInputElement;
	let value = 'https://npmtrends.com/';
	$: valid = value && inputRef?.validity.valid;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<AddForm />
	<div>
		{#await $ogBookmarks}
			{#each $bookmarks as bookmark}
				<OgCard requestUrl={bookmark} />
			{/each}
		{:then ogBookmarks}
			{#each ogBookmarks as bookmark}
				<OgCard {...bookmark} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</section>
