import { getWorkoutById, updateWorkout } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const workout = await getWorkoutById(params.id);

	if (!workout) {
		return {
			status: 404,
			error: new Error('Workout nicht gefunden')
		};
	}

	return { workout };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ params, request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const duration = Number(formData.get('duration'));
		const description = formData.get('description');

		if (!name || isNaN(duration) || !description) {
			return { success: false };
		}

		await updateWorkout(params.id, { name, duration, description });

		throw redirect(303, `/workouts/${params.id}`);
	}
};
