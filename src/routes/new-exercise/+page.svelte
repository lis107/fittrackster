<script>
	let { data } = $props();

	let success = $state(false);
	let name = $state("");
	let muscleGroup = $state("");
	let reps = $state(0);
	let sets = $state(0);
	let workoutId = $state("");

	if (typeof window !== "undefined") {
		const params = new URLSearchParams(window.location.search);
		success = params.get("success") === "true";
	}
</script>

<div class="container text-light">
	<h1 class="mb-4">Neue Übung erfassen</h1>

	{#if success}
		<div class="alert alert-success">Übung erfolgreich gespeichert!</div>
	{/if}

	<form method="POST" class="mb-5">
		<div class="mb-3">
			<label for="name" class="form-label">Name der Übung</label>
			<input
				type="text"
				class="form-control"
				id="name"
				name="name"
				bind:value={name}
				required
			/>
		</div>

		<div class="mb-3">
			<label for="muscleGroup" class="form-label">Zielmuskel</label>
			<input
				type="text"
				class="form-control"
				id="muscleGroup"
				name="muscleGroup"
				bind:value={muscleGroup}
				required
			/>
		</div>

		<div class="mb-3">
			<label for="reps" class="form-label">Wiederholungen</label>
			<input
				type="number"
				class="form-control"
				id="reps"
				name="reps"
				bind:value={reps}
				required
			/>
		</div>

		<div class="mb-3">
			<label for="sets" class="form-label">Sätze</label>
			<input
				type="number"
				class="form-control"
				id="sets"
				name="sets"
				bind:value={sets}
				required
			/>
		</div>

		<div class="mb-3">
			<label for="workoutId" class="form-label">Zugehöriges Workout</label
			>
			<select
				class="form-select"
				id="workoutId"
				name="workoutId"
				bind:value={workoutId}
				required
			>
				<option value="" disabled selected>Workout auswählen</option>
				{#each data.workouts as workout}
					<option value={workout._id}>{workout.name}</option>
				{/each}
			</select>
		</div>

		<button type="submit" class="btn btn-outline-light">Speichern</button>
	</form>

	<div class="card bg-secondary text-white mt-4">
		<div class="card-body">
			<h5 class="card-title">{name || "📝 Neue Übung"}</h5>
			<p class="card-text">
				Muskelgruppe: {muscleGroup || "–"}<br />
				{reps || 0} Wiederholungen × {sets || 0} Sätze
			</p>
			{#if workoutId}
				<small class="text-muted">Workout: {data.workouts.find(w => w._id === workoutId)?.name || 'Unbekannt'}</small>
			{:else}
				<small class="text-muted">Kein Workout ausgewählt</small>
			{/if}
		</div>
	</div>
</div>
