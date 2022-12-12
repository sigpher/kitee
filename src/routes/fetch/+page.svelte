<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="photos">
    {#each data.images as image}
        <figure>
            <img
                src={image.thumbnailUrl}
                alt={image.title}
                title={image.title}
            />
            <figcaption>{image.title}</figcaption>
        </figure>
    {/each}
</div>

<svelte:head>
    <title>Fetch</title>
</svelte:head>

<style>
    .photos {
        /* width: 90%; */
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
        margin: 0 auto;
    }
    figure,
    img {
        width: 100%;
        margin: 0;
    }
    figcaption {
        overflow: hidden;
        /* text-overflow: ellipsis; */
        /* white-space: nowrap; */
    }
</style>
