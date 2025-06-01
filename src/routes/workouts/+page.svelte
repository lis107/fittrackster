<script>
	import WorkoutCard from "$lib/components/WorkoutCard.svelte";
	import WorkoutVolumeChart from "$lib/components/WorkoutVolumeChart.svelte";
	let { data } = $props();
</script>

<div class="container text-light">
	<h1 class="mb-4">Meine Workouts</h1>

	{#if data.workouts.length > 0}
		<div class="mb-5">
			<h2>Volumenvergleich</h2>
			<WorkoutVolumeChart workouts={data.workouts} />
		</div>
		<a href="/new-workout" class="btn btn-success mb-4">+ Neues Workout</a>
		<div class="row">
			{#each data.workouts as workout}
				<div class="col-md-6 mb-4">
					<WorkoutCard {workout} />
				</div>
			{/each}
		</div>
	{:else}
		<p>Keine Workouts vorhanden.</p>
	{/if}
</div>
