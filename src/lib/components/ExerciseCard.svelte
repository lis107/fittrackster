<script>
	let { exercise } = $props();
</script>

<div class="card bg-dark text-white border-light h-100">
	<div class="card-body d-flex flex-column justify-content-between">
		<div>
			<h5 class="card-title">{exercise.name}</h5>
			<p class="card-text">Muskelgruppe: {exercise.muscleGroup}</p>
			<p class="card-text">
				{exercise.reps} Wiederholungen × {exercise.sets} Sätze
			</p>
		</div>

		<div class="mt-3 d-flex flex-wrap gap-2">
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={exercise._id} />
				<button type="submit" class="btn btn-outline-danger btn-sm">Löschen</button>
			</form>

			<a
				href={`/exercises/${exercise._id}/edit`}
				class="btn btn-outline-primary btn-sm">Bearbeiten</a>
		</div>
	</div>
</div>
