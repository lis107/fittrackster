<script>
	let success = false;

	if (typeof window !== 'undefined') {
		const params = new URLSearchParams(window.location.search);
		success = params.get('success') === 'true';
	}
</script>

<div class="container text-light">
	<h1 class="mb-4">Neues Workout erstellen</h1>

	{#if success}
		<div class="alert alert-success">Workout erfolgreich gespeichert!</div>
	{/if}

	<form method="POST" class="mb-5">
		<div class="mb-3">
			<label for="name" class="form-label">Name des Workouts</label>
			<input type="text" class="form-control" id="name" name="name" required />
		</div>

		<div class="mb-3">
			<label for="duration" class="form-label">Dauer (Minuten)</label>
			<input type="number" class="form-control" id="duration" name="duration" required />
		</div>

		<div class="mb-3">
			<label for="description" class="form-label">Beschreibung</label>
			<textarea class="form-control" id="description" name="description" rows="3"></textarea>
		</div>

		<button type="submit" class="btn btn-outline-light">Speichern</button>
	</form>
</div>
