<script>
	let { workout } = $props(); // Runes Mode
</script>

<div class="card bg-dark text-white border-light h-100">
	<div class="card-body d-flex flex-column justify-content-between">
		<div>
			<h5 class="card-title">{workout.name}</h5>
			<p class="card-text">{workout.duration} Minuten</p>
			<p class="card-text">{workout.description}</p>
		</div>

		<div class="mt-3 d-flex flex-wrap gap-2">
			<a
				href={`/workouts/${workout._id}`}
				class="btn btn-outline-primary btn-sm">Details</a>

			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={workout._id} />
				<button type="submit" class="btn btn-outline-danger btn-sm">Löschen</button>
			</form>

			<a
				href={`/workouts/${workout._id}/edit`}
				class="btn btn-outline-warning btn-sm">Bearbeiten</a>
		</div>
	</div>
</div>
