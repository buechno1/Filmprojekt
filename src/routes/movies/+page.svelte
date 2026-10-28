<script>
  import ComponentA from "#lib/components/ComponentA.svelte";

  let {data} = $props();

  /* let movies = $state([
    {
        title: "Sternenwanderer",
        year: 2025,
        length: "143 Minuten",
        image: "https://picsum.photos/seed/sternenwanderer/300/450"
    },
    {
        title: "Das Geheimnis von Altura",
        year: 2024,
        length: "120 Minuten",
        image: "https://picsum.photos/seed/altura/300/450"
    },
    {
        title: "Cyber City 2099",
        year: 2023,
        length: "115 Minuten",
        image: "https://picsum.photos/seed/cybercity/300/450"
    },
    {
        title: "Die Chroniken der Tiefe",
        year: 2026,
        length: "158 Minuten",
        image: "https://picsum.photos/seed/tiefe/300/450"
    },
    {
        title: "Im Schatten der Zeit",
        year: 2022,
        length: "98 Minuten",
        image: "https://picsum.photos/seed/schatten/300/450"
    },
    {
        title: "Galaktischer Sturm",
        year: 2025,
        length: "132 Minuten",
        image: "https://picsum.photos/seed/sturm/300/450"
    },
    {
        title: "Das letzte Portal",
        year: 2024,
        length: "110 Minuten",
        image: "https://picsum.photos/seed/portal/300/450"
    },
    {
        title: "Neon Samurai",
        year: 2023,
        length: "105 Minuten",
        image: "https://picsum.photos/seed/samurai/300/450"
    },
    {
        title: "Echos des Universums",
        year: 2026,
        length: "140 Minuten",
        image: "https://picsum.photos/seed/echos/300/450"
    },
    {
        title: "Projekt Genesis",
        year: 2022,
        length: "125 Minuten",
        image: "https://picsum.photos/seed/genesis/300/450"
    }
]); */
</script>


<a href="/movies/create">+ Add New Movie</a>
<div class="container text-center">
    <div class="row" style="height: auto;">
        {#each data.movies as movie}
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4 ">
                <ComponentA movie={movie} />
            </div>
        {/each}
    </div>
</div>
