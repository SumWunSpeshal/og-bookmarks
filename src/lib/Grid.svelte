<div class="grid">
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--col-amount, 1), minmax(0, 1fr));
		gap: 2px;
		outline: 2px solid var(--sand-3);
	}

	:global(.grid > *) {
		outline: 2px solid var(--sand-3);
	}
</style>
