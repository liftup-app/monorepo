import { Exercise } from '@liftup/mocks/src/mockExercises';

import WorkoutExcercise from './WorkoutExcercise/WorkoutExercise';

interface WorkoutExercisesProps {
    exercises: Exercise[];
    onDeleteExercise?: (exercise: Exercise) => void;
    onReplaceExercise?: (currentExercise: Exercise, newExercise: Exercise) => void;
}

export default function WorkoutExercises({
    exercises,
    onDeleteExercise,
    onReplaceExercise,
}: WorkoutExercisesProps) {
    return (
        <>
            {exercises.map((exercise) => (
                <WorkoutExcercise
                    key={exercise.id}
                    exercise={exercise}
                    onDeleteExercise={onDeleteExercise}
                    onReplaceExercise={onReplaceExercise}
                />
            ))}
        </>
    );
}
