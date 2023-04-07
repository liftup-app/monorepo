import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    View,
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
    onReplaceExercise?: (currentExercise: Exercise, newExercise: Exercise) => void;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onDiscardWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    exercises,
    onAddExercise,
    onDeleteExercise,
    onReplaceExercise,
    onNameChange,
    onDiscardWorkout,
}: ExpandedWorkoutViewProps) {
    return (
        <>
            <WorkoutInfo time={time} name={name} onNameChange={onNameChange} />
            <WorkoutExercises
                exercises={exercises}
                onDeleteExercise={onDeleteExercise}
                onReplaceExercise={onReplaceExercise}
            />
            <View className='flex w-full items-center justify-center space-y-8 p-4'>
                <Button onPress={onAddExercise} icon={faPlus} className='w-full'>
                    Add exercise
                </Button>
                <Button
                    variant='outline'
                    colorScheme='danger'
                    onPress={onDiscardWorkout}
                    className='w-full'
                >
                    Discard Workout
                </Button>
            </View>
        </>
    );
}
