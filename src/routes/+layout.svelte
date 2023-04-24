<script>
	import Header from '$lib/Header.svelte';
	import './fonts.css';
	import './styles.css';
	import './base.css';
</script>

<div class="app">
	<div />
	<div class="header">
		<Header />
	</div>
	<div />

	<div />
	<main>
		<slot />
	</main>
	<div />

	<div />
	<div class="footer">
		<footer>Hello World</footer>
	</div>
	<div />
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 1fr minmax(0, 1200px) 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 1px;

		min-height: 100vh;

		background-color: var(--contrast);
	}

	.app > * {
		background-color: var(--bg);
	}
</style>
