<script>
    /**
     * @type {any[]}
     */
    let photos = [];
    const handleClick = async () => {
        const res = await fetch(
            `http://jsonplaceholder.typicode.com/albums/1/photos`
        );
        photos = await res.json();
    };
</script>

<main>
    <button on:click={handleClick}>Click</button>

    <div class="photos">
        {#each photos as photo}
            <figure>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <figcaption>{photo.title}</figcaption>
            </figure>
        {:else}
            <!-- 当 photos.length === 0 时展示下方内容 -->
            <p>loading...</p>
        {/each}
    </div>
</main>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }

    figure,
    img {
        width: 100%;
        margin: 0;
    }
</style>
