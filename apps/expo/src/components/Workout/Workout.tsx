import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { time } from '@liftup/utils';
import { Button } from 'native-base';
import { styled } from 'nativewind';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

import useGlobalStore from '../../hooks/useGlobalStore';
import useTimer from '../../hooks/useTimer';
import WorkoutView from './WorkoutView/WorkoutView';

const styles = StyleSheet.create({
    bottomSheetShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
        shadowRadius: 30.94,
        elevation: 21,
    },
});

const SNAP_POINTS = ['12%', '100%'];

export default function Workout() {
    const { top: topSafeArea } = useSafeAreaInsets();
    const bottomTabBarHeight = useGlobalStore((state) => state.bottomTabBarHeight);
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);
    const currentTime = useTimer();

    const sheetRef = useRef<BottomSheet>(null);
    const handleOpen = useCallback(() => {
        sheetRef.current?.expand();
    }, []);

    const [expanded, setExpanded] = useState(false);
    const handleSheetChanges = useCallback((index: number) => {
        setExpanded(index === 1);
    }, []);

    const renderBackdrop = useCallback(
        (props: BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop {...props} disappearsOnIndex={0} appearsOnIndex={1} />
        ),
        [],
    );

    return (
        <BottomSheet
            style={styles.bottomSheetShadow}
            ref={sheetRef}
            bottomInset={bottomTabBarHeight || undefined}
            topInset={topSafeArea}
            snapPoints={SNAP_POINTS}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: colors.slate['900'] }}
            handleIndicatorStyle={{ backgroundColor: colors.slate['200'] }}
        >
            <WorkoutView
                time={time.msToYoutubeTimeString(currentTime)}
                name='Evening workout'
                expanded={expanded}
                onExpand={handleOpen}
                onStopWorkout={() => setRecordingWorkout(false)}
            />
        </BottomSheet>
    );
}
