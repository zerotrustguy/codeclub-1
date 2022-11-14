export default {
	fetch(request) {
		if(request.url =="https://0951835b7ba44ba7977ff97e00eb0eb1.edgecorp.workers.dev/") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
 };
 


