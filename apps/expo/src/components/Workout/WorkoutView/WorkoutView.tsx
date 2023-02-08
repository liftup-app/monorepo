import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';

import Button from '../../design-system/Button/Button';
import WorkoutExercises from './WorkoutExercises/WorkoutExercises';
import WorkoutInfo from './WorkoutInfo/WorkoutInfo';

export interface ExpandedWorkoutViewProps {
    time: string;
    name: string;
    exercises: Exercise[];
    onAddExercise?: (event: GestureResponderEvent) => void | null;
    onDeleteExercise?: (exercise: Exercise) => void;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onDiscardWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    exercises,
    onAddExercise,
    onDeleteExercise,
    onNameChange,
    onDiscardWorkout,
}: ExpandedWorkoutViewProps) {
    return (
        <>
            <WorkoutInfo time={time} name={name} onNameChange={onNameChange} />
            <WorkoutExercises exercises={exercises} onDeleteExercise={onDeleteExercise} />
            <Button onPress={onAddExercise} icon={faPlus} className='my-8 w-full'>
                Add exercise
            </Button>
            <Button colorScheme='danger' onPress={onDiscardWorkout} className='w-full'>
                Discard Workout
            </Button>
        </>
    );
}
