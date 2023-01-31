import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureResponderEvent } from 'react-native';

import Button from '../../design-system/Button/Button';
import WorkoutHeader from '../WorkoutHeader/WorkoutHeader';

export interface ExpandedWorkoutViewProps {
    time: string;
    name: string;
    expanded: boolean;
    onExpand?: () => void;
    onStopWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutView({
    time,
    name,
    expanded,
    onExpand,
    onStopWorkout,
}: ExpandedWorkoutViewProps) {
    return (
        <BottomSheetScrollView
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
            className='flex h-full w-full flex-1 flex-col'
        >
            <WorkoutHeader expanded={expanded} time={time} name={name} onExpand={onExpand} />
            <Button onPress={onStopWorkout}>Stop workout</Button>
        </BottomSheetScrollView>
    );
}
