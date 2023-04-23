import type { Bookmarks } from '$lib/stores/bookmarks';

export function buildParams(value: Bookmarks): URLSearchParams {
	const params = new URLSearchParams();

	for (const bookmark of value) {
		params.append('url', bookmark);
	}

	return params;
}
