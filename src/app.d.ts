// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { OgObject } from 'open-graph-scraper/dist/lib/types';

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

type OgBookmark = Pick<OgObject, 'requestUrl' | 'ogUrl' | 'ogTitle' | 'ogDescription' | 'ogImage'>;

export type OgImage = { url: string; width: string; height: string; type: string };

export type OgBookmarks = Record<OgObject['requestUrl'], OgBookmark>;
