import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {
	const response = await fetch("https://zenquotes.io/api/random/");
    const data = await response.json();
    console.log(data);

	if (data) {
		return {data: data};
	}


	throw error(404, 'Not found');
}
