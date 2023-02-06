import { Exercise } from '@liftup/mocks/src/mockExercises';

import WorkoutExcercise from './WorkoutExcercise/WorkoutExercise';

interface WorkoutExercisesProps {
    exercises: Exercise[];
    onDeleteExercise?: (exercise: Exercise) => void;
}

export default function WorkoutExercises({ exercises, onDeleteExercise }: WorkoutExercisesProps) {
    return (
        <>
            {exercises.map((exercise) => (
                <WorkoutExcercise
                    key={exercise.id}
                    exercise={exercise}
                    onDeleteExercise={onDeleteExercise}
                />
            ))}
        </>
    );
}
