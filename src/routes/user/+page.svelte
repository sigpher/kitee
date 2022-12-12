<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>User</h1>


<ul>
    <li>{data.user.title}</li>
    <li>{data.user.body}</li>
    <li>{data.user.userId}</li>
</ul>
