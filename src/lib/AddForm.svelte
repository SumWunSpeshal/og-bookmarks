<script lang="ts">
	import { bookmarks } from '$lib/stores/bookmarks';

	let inputRef: HTMLInputElement;
	let value = 'https://npmtrends.com/';
	$: valid = value && inputRef?.validity.valid;
	$: invalid = !valid;
</script>

<form on:submit|preventDefault={() => bookmarks.add(value)}>
	<label>
		<span>Add Url</span>
		<input
			type="url"
			required
			placeholder="https://example.com"
			pattern="https?://.*?\.[^\.]+$"
			class:invalid
			class:valid
			bind:this={inputRef}
			bind:value
		/>
	</label>
	<button type="submit">Add</button>
</form>

<style>
	.invalid {
		outline: 4px solid red;
	}

	.valid {
	}
</style>
