/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const res = await fetch('https://dummyjson.com/quotes/1');
    const data = await res.json();
    return {
      quote: data.quote,
      author: data.author
    };
  } catch (err) {
    return {
      quote: null,
      author: null
    };
  }
}
