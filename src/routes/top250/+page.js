import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let url = `https://movie.douban.com/top250?start=0`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': "https://movie.douban.com"
        }
    }
    );
    const body_text = await res.text();

    if (res.ok) {
        return {
            body_text
        }
    } else {
        return error(404, 'Not found');
    }
}