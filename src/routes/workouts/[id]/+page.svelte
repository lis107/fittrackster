<script>
	let { data } = $props();
</script>

<div class="container text-light">
	<h1 class="mb-4">{data.workout.name}</h1>

	<p><strong>Dauer:</strong> {data.workout.duration} Minuten</p>
	<p><strong>Beschreibung:</strong> {data.workout.description}</p>

	<h4 class="mt-5">Übungen in diesem Workout</h4>
	{#if data.workout.exercises.length > 0}
		<ul class="list-group mb-4">
			{#each data.workout.exercises as exercise}
				<li class="list-group-item bg-dark text-light border-light">
					<strong>{exercise.name}</strong> – {exercise.reps}×{exercise.sets} ({exercise.muscleGroup})
				</li>
			{/each}
		</ul>
	{:else}
		<p>Keine Übungen zugeordnet.</p>
	{/if}

	<a href="/workouts" class="btn btn-outline-light mt-4">Zurück zur Übersicht</a>
</div>
