import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(`http://jsonplaceholder.typicode.com/albums/1/photos`);
  const images = await res.json();

  if (res.ok) {
    return {
      images
    }
  } else {
    return error(404, 'Not found');
  }
}