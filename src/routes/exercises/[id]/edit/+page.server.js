import { getAllWorkoutsBasic, getExerciseById, updateExercise } from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const exercise = await getExerciseById(params.id);
	const workouts = await getAllWorkoutsBasic();

	if (!exercise) {
		throw error(404, 'Übung nicht gefunden');
	}

	if (!exercise.workoutId) {
		exercise.workoutId = '';
	}

	return {
		exercise,
		workouts
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('name');
		const muscleGroup = data.get('muscleGroup');
		const reps = Number(data.get('reps'));
		const sets = Number(data.get('sets'));
		const workoutId = data.get('workoutId');

		if (!name || !muscleGroup || isNaN(reps) || isNaN(sets)) {
			return { success: false };
		}

		await updateExercise(params.id, { name, muscleGroup, reps, sets, workoutId });
		throw redirect(303, '/exercises');
	}
};
