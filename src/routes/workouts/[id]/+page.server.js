import { getWorkoutById, getExercisesByWorkoutId } from '$lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const workout = await getWorkoutById(params.id);
	const exercises = await getExercisesByWorkoutId(params.id);

	if (!workout) {
		return {
			status: 404,
			error: new Error('Workout nicht gefunden')
		};
	}

	return { workout, exercises };
}
