import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
await client.connect();
const db = client.db('fittrack');

const workoutsCollection = db.collection('workouts');
const exercisesCollection = db.collection('exercises');

export async function getAllWorkoutsBasic() {
  const workouts = await workoutsCollection.find({}, { projection: { name: 1 } }).toArray();
  return workouts.map(w => ({ ...w, _id: w._id.toString() }));
}

export async function getAllWorkouts() {
  const workouts = await workoutsCollection.find().toArray();
  return Promise.all(
    workouts.map(async (w) => {
      const exercises = await getExercisesByWorkoutId(w._id.toString());
      return { ...w, _id: w._id.toString(), exercises };
    })
  );
}

export async function getWorkoutById(id) {
  const workout = await workoutsCollection.findOne({ _id: new ObjectId(id) });

  if (!workout) return null;

  const exercises = await exercisesCollection
    .find({ workoutId: id })
    .toArray();

  return {
    ...workout,
    _id: workout._id.toString(),
    exercises: exercises.map(e => ({ ...e, _id: e._id.toString() }))
  };
}

export async function insertWorkout(data) {
  const result = await workoutsCollection.insertOne(data);
  return result.insertedId;
}

export async function deleteWorkout(id) {
  return await workoutsCollection.deleteOne({ _id: new ObjectId(id) });
}

export async function updateWorkout(id, updatedData) {
  await workoutsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
}

export async function getAllExercises() {
  const exercises = await exercisesCollection.find().toArray();
  return exercises.map(e => ({ ...e, _id: e._id.toString() }));
}

export async function insertExercise(data) {
  const result = await exercisesCollection.insertOne(data);
  return result.insertedId;
}

export async function getExercisesByWorkoutId(workoutId) {
  const exercises = await exercisesCollection.find({ workoutId }).toArray();
  return exercises.map(e => ({ ...e, _id: e._id.toString() }));
}

export async function deleteExercise(id) {
  return await exercisesCollection.deleteOne({ _id: new ObjectId(id) });
}

export async function getExerciseById(id) {
	const exercise = await exercisesCollection.findOne({ _id: new ObjectId(id) });
	return exercise ? { ...exercise, _id: exercise._id.toString() } : null;
}

export async function updateExercise(id, updatedData) {
	await exercisesCollection.updateOne(
		{ _id: new ObjectId(id) },
		{ $set: updatedData }
	);
}

