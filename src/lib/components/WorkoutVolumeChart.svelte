<script>
	import { onMount } from 'svelte';
	import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

	let { workouts } = $props(); // Runes Mode

	let chartEl;

	onMount(() => {
		Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

		const ctx = chartEl.getContext('2d');
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: workouts.map(w => w.name),
				datasets: [{
					label: 'Gesamtvolumen',
					data: workouts.map(w =>
						w.exercises?.reduce((sum, ex) => sum + (ex.reps * ex.sets), 0) ?? 0
					),
					backgroundColor: 'rgba(54, 162, 235, 0.6)'
				}]
			},
			options: {
				responsive: true,
				scales: {
					y: { beginAtZero: true }
				}
			}
		});

		return () => chart.destroy();
	});
</script>

<canvas bind:this={chartEl}></canvas>
