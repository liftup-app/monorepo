import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';

import Button from '../../design-system/Button/Button';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import WorkoutInfo from './WorkoutInfo/WorkoutInfo';

export interface ExpandedWorkoutViewProps {
    time: string;
    name: string;
    onExpand?: () => void;
    onFinishWorkout?: (event: GestureResponderEvent) => void | null;
    onAddExercise?: (event: GestureResponderEvent) => void | null;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onDiscardWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    onExpand,
    onFinishWorkout,
    onAddExercise,
    onNameChange,
    onDiscardWorkout,
}: ExpandedWorkoutViewProps) {
    const { animatedIndex } = useBottomSheet();

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

            <Button onPress={onAddExercise} icon={faPlus} className='my-8 w-full'>
                Add exercise
            </Button>
            <Button colorScheme='danger' onPress={onDiscardWorkout} className='w-full'>
                Discard Workout
            </Button>
        </>
    );
}
