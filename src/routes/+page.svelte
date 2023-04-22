<script lang="ts">
	import { bookmarks, ogBookmarks } from '../stores/bookmarks';
	import { get } from 'svelte/store';

	let inputRef: HTMLInputElement;
	let value = 'https://npmtrends.com/';
	$: valid = value && inputRef?.validity.valid;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<form
		on:submit|preventDefault={() => {
			if (get(bookmarks).includes(value)) {
				return;
			}

			bookmarks.add(value);
		}}
	>
		<label>
			<span>Add Url</span>
			<input
				type="url"
				required
				placeholder="https://example.com"
				pattern="https?://.*?\.[^\.]+$"
				class:valid
				bind:this={inputRef}
				bind:value
			/>
		</label>
		<button type="submit">Add</button>
	</form>
	<ul>
		{#await $ogBookmarks}
			<p>...loading</p>
		{:then ogBookmarks}
			{#each ogBookmarks as bookmark}
				<li>
					<pre>{JSON.stringify(bookmark, null, 2)}</pre>
					<button type="button" on:click={() => bookmarks.remove(bookmark.requestUrl)}
						>Delete
					</button>
				</li>
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</ul>
</section>

<style>
	.valid {
		border: 1px solid red;
	}
</style>
