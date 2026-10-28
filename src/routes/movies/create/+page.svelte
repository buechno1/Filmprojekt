<script>
  let { form } = $props();
</script>

<a href="/movies">Back</a>
<h1>Add a movie</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input name="year" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Length</label>
    <input name="length" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Confirm</button>
</form>

{#if form?.success}
  <p>Movie created</p>
{/if}
