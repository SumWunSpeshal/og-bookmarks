<script lang="ts">
	import AddForm from '$lib/AddForm.svelte';
	import Grid from '$lib/Grid.svelte';
	import OgCard from '$lib/OgCard.svelte';
	import { bookmarks } from '$lib/stores/bookmarks';
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
				<OgCard
					isLoading={false}
					ogDescription={bookmark?.ogDescription}
					ogTitle={bookmark?.ogTitle}
					ogImage={bookmark?.ogImage}
					{requestUrl}
				/>
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</Grid>
</section>
