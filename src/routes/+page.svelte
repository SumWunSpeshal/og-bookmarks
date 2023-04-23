<script lang="ts">
	import { bookmarks, ogBookmarks } from '$lib/stores/bookmarks';
	import AddForm from '$lib/AddForm.svelte';
	import OgCard from '$lib/OgCard.svelte';
	import Grid from '$lib/Grid.svelte';

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
	<Grid --col-amount="2">
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
	</Grid>
</section>
