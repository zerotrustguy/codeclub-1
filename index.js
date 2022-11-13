export default {
	fetch() {
		return new Response('Hello world !from sheril', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
