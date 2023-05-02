<script>
	import Header from '$lib/Header.svelte';
	import 'open-props/colors.min.css';
	import './base.css';
	import './fonts.css';
	import './styles.css';
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
		grid-template-columns: 1fr minmax(0, 1400px) 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 2px;

		min-height: 100vh;

		background-color: var(--sand-3);
	}

	.app > * {
		background-color: var(--brown-0);
	}
</style>
