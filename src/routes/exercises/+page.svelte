<script>
	import ExerciseCard from '$lib/components/ExerciseCard.svelte';

	let success = false;

	if (typeof window !== 'undefined') {
		const params = new URLSearchParams(window.location.search);
		success = params.get('success') === 'true';
	}

	let { data } = $props();
</script>

<div class="container text-light">
	<h1 class="mb-4">Meine Übungen</h1>

	<a href="/new-exercise" class="btn btn-success mb-4">+ Neue Übung</a>

	{#if success}
		<div class="alert alert-success">Übung erfolgreich gespeichert!</div>
	{/if}

	{#if data.exercises.length > 0}
		<div class="row">
			{#each data.exercises as exercise}
				<div class="col-md-6 mb-4">
					<ExerciseCard {exercise} />
				</div>
			{/each}
		</div>
	{:else}
		<p>Keine Übungen vorhanden.</p>
	{/if}
</div>
