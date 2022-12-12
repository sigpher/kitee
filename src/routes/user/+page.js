/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
    const res = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (res.ok) {
        const user = await res.json();
        return { user }
    } else {
        return new Error("new")
    }
}
