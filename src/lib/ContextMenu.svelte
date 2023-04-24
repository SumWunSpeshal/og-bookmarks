<script lang="ts">
	import { fly } from 'svelte/transition';

	export let onDelete = () => {};
	export let onRefresh = () => {};

	let open = false;

	function toggle() {
		open = !open;
	}
</script>

<div class="context-menu">
	<button type="button" class="button" on:click={toggle}>
		<span class="dot" />
		<span class="dot" />
		<span class="dot" />
	</button>

	{#if open}
		<ul class="list" in:fly={{ y: -20 }} out:fly={{ y: -20 }}>
			<li>
				<button on:click|stopPropagation={onDelete}>Delete</button>
			</li>
			<li>
				<button on:click|stopPropagation={onRefresh}>Refresh</button>
			</li>
		</ul>
	{/if}
</div>

<style>
	.context-menu {
		position: relative;
	}

	.button {
		display: flex;
		align-items: center;
		gap: 3px;

		padding: 6px;

		border-radius: 50%;
		aspect-ratio: 1;

		background-color: transparent;
		border: 0;
		transform: rotate(90deg);

		cursor: pointer;

		transition: background-color 0.1s ease-in-out;
	}

	.button:hover {
		background-color: var(--bg);
	}

	.dot {
		background-color: black;
		width: 5px;
		border-radius: 50%;
		aspect-ratio: 1;
	}

	.list {
		position: absolute;
		top: 100%;
		right: 0;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2);
	}

	.list li {
		padding: 0.5rem 1rem;
		background-color: white;
	}

	.list li:not(:first-child) {
		border-top: 1px solid var(--contrast);
	}
</style>
