<script>
    let {data} = $props()
</script>

<h1>{data.movie.title}</h1>
<img src={data.movie.poster} style="height: 200px; width: 150px object-fit: cover"/> 
<p>ID: {data.movie._id}</p>
<p>Year: {data.movie.year}</p>
<div>Actors:
    <ul>
        {#each data.movie.actors as actor }
            <li>{actor}</li>
        {/each}
    </ul>
</div>