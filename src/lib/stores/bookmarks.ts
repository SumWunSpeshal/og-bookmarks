import { derived, writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import { buildParams } from '$lib/build-params';

export type Bookmarks = string[];
const DEFAULT_STORE: Bookmarks = [];

function createBookmarksStore() {
	const cache = browser ? localStorage.getItem('urls') : null;
	const $store = writable(cache ? (JSON.parse(cache) as Bookmarks) : DEFAULT_STORE);

	return {
		subscribe: $store.subscribe,
		add: (url: string) => {
			if (get($store).includes(url)) {
				return;
			}

			$store.update((prev) => Array.from(new Set([...prev, url])));
		},
		remove: (url: string) => $store.update((prev) => prev.filter((e) => e !== url))
	};
}

export const bookmarks = createBookmarksStore();
export const ogBookmarks = derived(
	bookmarks,
	async (value) => {
		if (!browser) {
			return;
		}

		const response = await fetch('/api/all?' + buildParams(value));
		return await response.json();
	},
	Promise.resolve(DEFAULT_STORE)
);

if (browser) {
	bookmarks.subscribe((value) => localStorage.setItem('urls', JSON.stringify(value)));
}
