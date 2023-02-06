import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';

import useTimer from '../../../hooks/useTimer';
import Button from '../../design-system/Button/Button';
import WorkoutExercises from './WorkoutExercises/WorkoutExercises';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import WorkoutInfo from './WorkoutInfo/WorkoutInfo';

export interface ExpandedWorkoutViewProps {
    startTime: Date;
    name: string;
    exercises: Exercise[];
    onExpand?: () => void;
    onFinishWorkout?: (event: GestureResponderEvent) => void | null;
    onAddExercise?: (event: GestureResponderEvent) => void | null;
    onDeleteExercise?: (exercise: Exercise) => void;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onDiscardWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    startTime,
    name,
    exercises,
    onExpand,
    onFinishWorkout,
    onAddExercise,
    onDeleteExercise,
    onNameChange,
    onDiscardWorkout,
}: ExpandedWorkoutViewProps) {
    const { animatedIndex } = useBottomSheet();
    const time = useTimer(startTime);

    return (
        <>
            <WorkoutHeader
                amountExpanded={animatedIndex.value}
                time={time}
                name={name}
                onExpand={onExpand}
                onFinishWorkout={onFinishWorkout}
            />
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
