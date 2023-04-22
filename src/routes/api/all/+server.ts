import type { RequestHandler } from '@sveltejs/kit';
import ogs from 'open-graph-scraper';

export const GET: RequestHandler = async ({ url }) => {
	const urls = url.searchParams.getAll('url');
	const data = await Promise.all(
		urls.map((url) =>
			ogs({
				url,
				onlyGetOpenGraphInfo: true
			})
		)
	);

	return new Response(JSON.stringify(data.map(({ result }) => result)), {
		status: 200
	});
};
