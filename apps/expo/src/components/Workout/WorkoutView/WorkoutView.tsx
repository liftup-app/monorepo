import { useBottomSheet } from '@gorhom/bottom-sheet';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';

import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import WorkoutInfo from './WorkoutInfo/WorkoutInfo';

export interface ExpandedWorkoutViewProps {
    time: string;
    name: string;
    onExpand?: () => void;
    onFinishWorkout?: (event: GestureResponderEvent) => void | null;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onStopWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    onExpand,
    onFinishWorkout,
    onNameChange,
    onStopWorkout,
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
        </>
    );
}
