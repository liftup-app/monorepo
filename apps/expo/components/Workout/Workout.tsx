import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useState } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useGlobalStore from '../../src/hooks/useGlobalStore';
import useTimer from '../../src/hooks/useTimer';
import msToYoutubeTimeString from '../../src/utils/msToYoutubeTimeString';
import { Button, ButtonText } from '../Button';

const SNAP_POINTS = ['15%', '100%'];

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
        >
            {collapsed ? (
                <BottomSheetView className='flex h-full w-full flex-1 flex-col'>
                    <Text>{msToYoutubeTimeString(time)}</Text>
                </BottomSheetView>
            ) : (
                <BottomSheetScrollView
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
                    className='flex h-full w-full flex-1 flex-col'
                >
                    <Button onPress={() => setRecordingWorkout(false)}>
                        <ButtonText>Stop workout</ButtonText>
                    </Button>
                </BottomSheetScrollView>
            )}
        </BottomSheet>
    );
}
