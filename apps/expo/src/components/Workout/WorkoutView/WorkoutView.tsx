import { BottomSheetScrollView, useBottomSheet } from '@gorhom/bottom-sheet';
import { useEffect } from 'react';
import { GestureResponderEvent, LayoutChangeEvent } from 'react-native';

import Button from '../../design-system/Button/Button';
import WorkoutHeader from '../WorkoutHeader/WorkoutHeader';

export interface ExpandedWorkoutViewProps {
    time: string;
    name: string;
    onExpand?: () => void;
    onStopWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    onExpand,
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
            />
            {/* <Button onPress={onStopWorkout}>Stop workout</Button> */}
        </>
    );
}
