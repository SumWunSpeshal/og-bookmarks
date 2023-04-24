<div class="grid">
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--col-amount, 1), minmax(0, 1fr));
		gap: 1px;
		outline: 1px solid var(--contrast);
	}

	:global(.grid > *) {
		outline: 1px solid var(--contrast);
	}
</style>
