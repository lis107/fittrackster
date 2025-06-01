<script>
	let { data } = $props();

	let name = data.exercise?.name ?? '';
	let muscleGroup = data.exercise?.muscleGroup ?? '';
	let reps = data.exercise?.reps ?? 0;
	let sets = data.exercise?.sets ?? 0;
	let workoutId = data.exercise?.workoutId ?? '';
	let workouts = data.workouts ?? [];
</script>

<div class="container text-light">
	<h1 class="mb-4">Übung bearbeiten</h1>

	<form method="POST" class="mb-5">
		<div class="mb-3">
			<label for="name" class="form-label">Name der Übung</label>
			<input type="text" class="form-control" id="name" name="name" bind:value={name} required />
		</div>

		<div class="mb-3">
			<label for="muscleGroup" class="form-label">Zielmuskel</label>
			<input type="text" class="form-control" id="muscleGroup" name="muscleGroup" bind:value={muscleGroup} required />
		</div>

		<div class="mb-3">
			<label for="reps" class="form-label">Wiederholungen</label>
			<input type="number" class="form-control" id="reps" name="reps" bind:value={reps} required />
		</div>

		<div class="mb-3">
			<label for="sets" class="form-label">Sätze</label>
			<input type="number" class="form-control" id="sets" name="sets" bind:value={sets} required />
		</div>

		<div class="mb-3">
			<label for="workoutId" class="form-label">Zugehöriges Workout</label>
			<select class="form-select" name="workoutId" bind:value={workoutId} required>
				{#each workouts as workout}
					<option value={workout._id}>{workout.name}</option>
				{/each}
			</select>
		</div>

		<button type="submit" class="btn btn-outline-light">Speichern</button>
	</form>

	<a href="/exercises" class="btn btn-outline-light">Zurück zur Übersicht</a>
</div>