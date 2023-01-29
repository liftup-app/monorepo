import BottomSheet, {
    BottomSheetHandleProps,
    BottomSheetScrollView,
    BottomSheetView as BaseBottomSheetView,
} from '@gorhom/bottom-sheet';
import { msToYoutubeTimeString } from '@liftup/utils';
import { Button } from 'native-base';
import { styled } from 'nativewind';
import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

import useGlobalStore from '../../hooks/useGlobalStore';
import useTimer from '../../hooks/useTimer';

const SNAP_POINTS = ['12%', '100%'];

interface WorkoutProps {
    time: string;
    name: string;
}

const BottomSheetView = styled(BaseBottomSheetView);

function CollapsedWorkoutView({ time, name }: WorkoutProps) {
    return (
        <BottomSheetView className='items-center justify-center'>
            <Text className='text-lg font-semibold text-white'>{name}</Text>
            <Text className='text-sm font-semibold text-slate-300'>{time}</Text>
        </BottomSheetView>
    );
}

export default function Workout() {
    const { top: topSafeArea } = useSafeAreaInsets();
    const bottomTabBarHeight = useGlobalStore((state) => state.bottomTabBarHeight);
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);
    const time = useTimer();

    const [collapsed, setCollapsed] = useState(true);
    const handleSheetChanges = useCallback((index: number) => {
        setCollapsed(index === 0);
    }, []);

    return (
        <BottomSheet
            bottomInset={bottomTabBarHeight || undefined}
            topInset={topSafeArea}
            snapPoints={SNAP_POINTS}
            onChange={handleSheetChanges}
            backgroundStyle={{ backgroundColor: colors.slate['600'] }}
            handleIndicatorStyle={{ backgroundColor: colors.slate['200'] }}
        >
            {collapsed ? (
                <CollapsedWorkoutView time={msToYoutubeTimeString(time)} name='Evening workout' />
            ) : (
                <BottomSheetScrollView
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
                    className='flex h-full w-full flex-1 flex-col'
                >
                    <Button onPress={() => setRecordingWorkout(false)}>Stop workout</Button>
                </BottomSheetScrollView>
            )}
        </BottomSheet>
    );
}
