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
		grid-template-columns: 1fr max(1200px) 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 1px;

		min-height: 100vh;

		background-color: #828c97;
	}

	.app > * {
		background-color: rgb(226 228 221);
	}
</style>
