import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { OgBookmarks } from '../../app';

const DEFAULT_STORE: OgBookmarks = {};

function createBookmarksStore() {
	const cache = browser ? localStorage.getItem('bookmarks') : null;
	const $store = writable(cache ? (JSON.parse(cache) as OgBookmarks) : DEFAULT_STORE);

	return {
		subscribe: $store.subscribe,
		add: async (url: string) => {
			if (url in get($store)) {
				return;
			}
			const ogObject = await getOpenGraphData(url);
			$store.update((prev) => ({ ...prev, [url]: ogObject }));
		},
		remove: (url: string) => {
			$store.update((prev) => {
				if (url in prev) {
					delete prev[url];
				}

				return { ...prev };
			});
		},
		refresh: async (url: string) => {
			if (!(url in get($store))) {
				return;
			}
			const ogObject = await getOpenGraphData(url);
			$store.update((prev) => ({ ...prev, [url]: ogObject }));
		}
	};
}

async function getOpenGraphData(url: string) {
	const response = await fetch(`/api/all?url=${url}`);
	return await response.json();
}

export const bookmarks = createBookmarksStore();

if (browser) {
	bookmarks.subscribe((value) => localStorage.setItem('bookmarks', JSON.stringify(value)));
}
