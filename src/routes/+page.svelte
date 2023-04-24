<script lang="ts">
	import { bookmarks } from '$lib/stores/bookmarks';
	import AddForm from '$lib/AddForm.svelte';
	import OgCard from '$lib/OgCard.svelte';
	import Grid from '$lib/Grid.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="OgBookmarks App" />
</svelte:head>

<section>
	<AddForm />
	<Grid --col-amount="2">
		{#await $bookmarks then bookmarks}
			{#each Object.entries(bookmarks) as [requestUrl, bookmark]}
				<OgCard isLoading={false} {requestUrl} {...bookmark} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</Grid>
</section>
