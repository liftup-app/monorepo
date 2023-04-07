import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons/faRotateLeft';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Exercise, MOCK_EXERCISES } from '@liftup/mocks/src/mockExercises';
import { Menu } from 'native-base';
import { styled } from 'nativewind';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { slate } from 'tailwindcss/colors';

import ExerciseListModal from '../../../../../ExerciseListModal/ExerciseListModal';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export interface WorkoutExerciseHeaderProps {
    exercise: Exercise;
    onDeleteExercise?: (exercise: Exercise) => void;
    onReplaceExercise?: (currentExercise: Exercise, newExercise: Exercise) => void;
}

export default function WorkoutExerciseHeader({
    exercise,
    onDeleteExercise,
    onReplaceExercise,
}: WorkoutExerciseHeaderProps) {
    const [showExerciseListModal, setShowExerciseListModal] = useState(false);

    return (
        <>
            <ExerciseListModal
                exercises={MOCK_EXERCISES}
                onClickExercise={(newExercise) => {
                    onReplaceExercise?.(exercise, newExercise);
                    setShowExerciseListModal(false);
                }}
                isOpen={showExerciseListModal}
                onClose={() => setShowExerciseListModal(false)}
            />

            <View className='flex w-full flex-row items-center justify-between px-4 py-2'>
                <Text className='pl-2 text-lg font-semibold text-white'>{exercise.name}</Text>
                <Menu
                    backgroundColor={slate['800']}
                    className='w-40 rounded-lg'
                    offset={4}
                    placement='bottom right'
                    // eslint-disable-next-line react/no-unstable-nested-components
                    trigger={(triggerProps) => {
                        return (
                            <Pressable
                                {...triggerProps}
                                accessibilityLabel='Open Exercise Options'
                                className='flex items-center justify-center rounded-full bg-white/10 p-2'
                            >
                                <FontAwesomeIcon className='text-lg text-white' icon={faEllipsis} />
                            </Pressable>
                        );
                    }}
                >
                    <Menu.Item
                        onPress={() => setShowExerciseListModal(true)}
                        className='flex w-full flex-row items-center justify-start px-0 text-start'
                    >
                        <FontAwesomeIcon icon={faRotateLeft} className='text-slate-400' />
                        <Text className='text-white'>Replace Exercise</Text>
                    </Menu.Item>
                    <Menu.Item
                        onPress={() => onDeleteExercise?.(exercise)}
                        className='flex w-full flex-row items-center justify-start px-0 text-start'
                    >
                        <FontAwesomeIcon icon={faXmark} className='text-red-600' />
                        <Text className='text-white'>Delete Exercise</Text>
                    </Menu.Item>
                </Menu>
            </View>
        </>
    );
}
