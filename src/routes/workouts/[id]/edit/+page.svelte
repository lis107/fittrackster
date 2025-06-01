<script>
	let { data } = $props();

	let name = data.workout.name;
	let duration = data.workout.duration;
	let description = data.workout.description;
</script>

<div class="container text-light">
	<h1 class="mb-4">Workout bearbeiten</h1>

	<form method="POST">
		<div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input type="text" id="name" name="name" class="form-control" bind:value={name} required />
		</div>

		<div class="mb-3">
			<label for="duration" class="form-label">Dauer (Minuten)</label>
			<input type="number" id="duration" name="duration" class="form-control" bind:value={duration} required />
		</div>

		<div class="mb-3">
			<label for="description" class="form-label">Beschreibung</label>
			<textarea id="description" name="description" class="form-control" bind:value={description} required></textarea>
		</div>

		<button type="submit" class="btn btn-outline-primary">Änderungen speichern</button>
		<a href={`/workouts/${data.workout._id}`} class="btn btn-outline-light ms-2">Zurück</a>
	</form>
</div>
