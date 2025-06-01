import { insertExercise, getAllWorkoutsBasic } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export async function load() {
	const workouts = await getAllWorkoutsBasic();
	return { workouts };
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const muscleGroup = data.get('muscleGroup');
		const reps = Number(data.get('reps'));
		const sets = Number(data.get('sets'));
		const workoutId = data.get('workoutId');

		if (!name || !muscleGroup || isNaN(reps) || isNaN(sets) || !workoutId) {
			return { success: false };
		}

		await insertExercise({ name, muscleGroup, reps, sets, workoutId });

		throw redirect(303, '/new-exercise?success=true');
	}
};
