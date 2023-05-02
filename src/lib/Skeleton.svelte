<script lang="ts">
	export let isLoading = false;
</script>

{#if isLoading}
	<div class="bg" />
	<div class="shimmer" />
{/if}

<style>
	.bg {
		position: absolute;
		inset: 0;
		background-color: var(--brown-2);
		z-index: 1;
	}

	.shimmer {
		position: absolute;
		inset: 0;
		z-index: 1;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.2) 20%,
			rgba(255, 255, 255, 0.5) 60%,
			rgba(255, 255, 255, 0)
		);
		animation: shimmer 2s infinite;
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
</style>
