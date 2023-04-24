import type { RequestHandler } from '@sveltejs/kit';
import ogs from 'open-graph-scraper';

export const GET: RequestHandler = async ({ url }) => {
	const requestUrl = url.searchParams.get('url');

	if (!requestUrl) {
		return new Response(null, {
			status: 500
		});
	}

	const { result } = await ogs({
		url: requestUrl,
		onlyGetOpenGraphInfo: true
	});

	return new Response(
		JSON.stringify({
			requestUrl,
			ogTitle: result.ogTitle,
			ogDescription: result.ogDescription,
			ogUrl: result.ogUrl,
			ogImage: result.ogImage
		}),
		{
			status: 200
		}
	);
};
