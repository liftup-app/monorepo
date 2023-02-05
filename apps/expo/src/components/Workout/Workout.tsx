import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { MOCK_EXERCISES_ORGANIZED } from '@liftup/mocks';
import { time } from '@liftup/utils';
import { styled } from 'nativewind';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

import useGlobalStore from '../../hooks/useGlobalStore';
import useTimer from '../../hooks/useTimer';
import AlertDialog from '../design-system/AlertDialog/AlertDialog';
import ExerciseListModal from '../ExerciseListModal/ExerciseListModal';
import WorkoutView from './WorkoutView/WorkoutView';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

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
    const { top: safeAreaTop } = useSafeAreaInsets();
    const [name, setName] = useState('Evening Workout');
    const bottomTabBarHeight = useGlobalStore((state) => state.bottomTabBarHeight);
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);
    const [showCancelWorkoutModal, setShowCancelWorkoutModal] = useState(false);
    const [showAddExerciseModal, setShowAddExerciseModal] = useState(false);
    const [showFinishWorkoutModal, setShowFinishWorkoutModal] = useState(false);
    const [exercises, setExercises] = useState([]);

    const currentTime = useTimer();

    const sheetRef = useRef<BottomSheet>(null);
    const handleOpen = useCallback(() => {
        sheetRef.current?.expand();
    }, []);

    const cancelDialogRef = useRef(null);
    const finishWorkoutDialogRef = useRef(null);

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
                variant='error'
                leastDestructiveRef={cancelDialogRef}
                isOpen={showCancelWorkoutModal}
                icon={<FontAwesomeIcon className='text-white' icon={faWarning} />}
                title='Discard Workout'
                description='This action is permanent. Current workout progress will be deleted.'
                proceedButtonText='Discard'
                onProceed={() => setRecordingWorkout(false)}
                onCancel={() => setShowCancelWorkoutModal(false)}
            />
            <AlertDialog
                variant='success'
                leastDestructiveRef={finishWorkoutDialogRef}
                isOpen={showFinishWorkoutModal}
                icon={<Text>&#127881;</Text>}
                title='Finish Workout'
                description='Great job out there today!'
                proceedButtonText='Finish'
                onProceed={() => setRecordingWorkout(false)}
                onCancel={() => setShowFinishWorkoutModal(false)}
            />
            <ExerciseListModal
                exercises={MOCK_EXERCISES_ORGANIZED}
                isOpen={showAddExerciseModal}
                onClose={() => setShowAddExerciseModal(false)}
            />
            <BottomSheet
                style={styles.bottomSheetShadow}
                ref={sheetRef}
                snapPoints={SNAP_POINTS}
                bottomInset={bottomTabBarHeight || undefined}
                topInset={safeAreaTop}
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
                        onAddExercise={() => setShowAddExerciseModal(true)}
                        onDiscardWorkout={() => {
                            if (exercises.length === 0) {
                                setRecordingWorkout(false);
                            } else {
                                setShowCancelWorkoutModal(true);
                            }
                        }}
                        onFinishWorkout={() => {
                            if (exercises.length === 0) {
                                setRecordingWorkout(false);
                            } else {
                                setShowFinishWorkoutModal(true);
                            }
                        }}
                    />
                </BottomSheetScrollView>
            </BottomSheet>
        </>
    );
}
