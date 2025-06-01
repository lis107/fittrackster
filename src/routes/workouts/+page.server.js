import { getAllWorkouts, deleteWorkout } from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const workouts = await getAllWorkouts();
	return { workouts };
}

/** @type {import('./$types').Actions} */
export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (id) {
			await deleteWorkout(id);
		}

		return { success: true };
	}
};