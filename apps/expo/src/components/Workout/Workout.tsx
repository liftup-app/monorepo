import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { time } from '@liftup/utils';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

import useGlobalStore from '../../hooks/useGlobalStore';
import useTimer from '../../hooks/useTimer';
import AlertDialog from '../design-system/AlertDialog/AlertDialog';
import Button from '../design-system/Button/Button';
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
    const [name, setName] = useState('Evening Workout');
    const bottomTabBarHeight = useGlobalStore((state) => state.bottomTabBarHeight);
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);
    const [showCancelWorkoutModal, setShowCancelWorkoutModal] = useState(false);

    const [exercises, setExercises] = useState([]);

    const currentTime = useTimer();

    const sheetRef = useRef<BottomSheet>(null);
    const handleOpen = useCallback(() => {
        sheetRef.current?.expand();
    }, []);

    const cancelDialogRef = useRef(null);

    const renderBackdrop = useCallback(
        (props: BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                enableTouchThrough
                pressBehavior='collapse'
                disappearsOnIndex={0}
                appearsOnIndex={1}
            />
        ),
        [],
    );

    return (
        <>
            <AlertDialog
                leastDestructiveRef={cancelDialogRef}
                isOpen={showCancelWorkoutModal}
                title='Discard Workout'
                description='This action is permanent. Current workout progress will be deleted.'
                proceedButtonText='Discard'
                onProceed={() => setRecordingWorkout(false)}
                onCancel={() => setShowCancelWorkoutModal(false)}
            />
            <BottomSheet
                style={styles.bottomSheetShadow}
                ref={sheetRef}
                snapPoints={SNAP_POINTS}
                bottomInset={bottomTabBarHeight || undefined}
                topInset={topSafeArea}
                backdropComponent={renderBackdrop}
                backgroundStyle={{ backgroundColor: colors.slate['900'] }}
                handleIndicatorStyle={{ backgroundColor: colors.slate['200'] }}
            >
                <BottomSheetScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 16,
                    }}
                >
                    <WorkoutView
                        time={time.msToYoutubeTimeString(currentTime)}
                        name={name}
                        onNameChange={(event) => setName(event.nativeEvent.text)}
                        onExpand={handleOpen}
                        onDiscardWorkout={() => {
                            if (exercises.length === 0) {
                                setRecordingWorkout(false);
                            } else {
                                setShowCancelWorkoutModal(true);
                            }
                        }}
                        onFinishWorkout={() => setRecordingWorkout(false)}
                    />
                </BottomSheetScrollView>
            </BottomSheet>
        </>
    );
}
