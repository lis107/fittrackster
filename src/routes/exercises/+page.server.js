import { getAllExercises, deleteExercise} from '$lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const exercises = await getAllExercises();
	return {
		exercises
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (id) {
			await deleteExercise(id);
		}

		return { success: true };
	}
};