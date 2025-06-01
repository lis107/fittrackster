import { insertWorkout } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const duration = Number(data.get('duration'));
    const description = data.get('description');

    if (!name || isNaN(duration)) {
      return { success: false };
    }

    await insertWorkout({ name, duration, description });
    
    throw redirect(303, '/new-workout?success=true');
  }
};
