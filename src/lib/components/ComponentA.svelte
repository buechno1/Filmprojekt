<script>
    let {movie} = $props();
</script>


<div class="card" style="width: 20rem; height: 400px">
  <img src={movie.poster} class="card-img-top" alt={movie.title} style="height: 200px">
  <div class="card-body">
    <h4 class="card-title">{movie.title}</h4>
    <p class="card-text"><b>year:</b> {movie.year}</p>
    <p class="card-text"><b>length:</b> {movie.length}</p>
    <a href={"/movies/" + movie._id}>Zum Film</a>
  </div>
</div>

<style>
    h4 {
        color: white ;
    }

    .card-body {
        background-color: black;
    }

    .card {
        border: solid white 3px;
    }
</style>