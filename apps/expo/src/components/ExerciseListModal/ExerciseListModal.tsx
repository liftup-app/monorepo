import { OrganizedExercises } from '@liftup/mocks';
import { Exercise, organizeMockExercises } from '@liftup/mocks/src/mockExercises';
import { IModalProps, Input, Modal } from 'native-base';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

import ExerciseList from './ExerciseList/ExerciseList';

export interface ExerciseListModalProps extends IModalProps {
    onClickExercise?: (exercise: Exercise) => void;
    onClose?: () => void;
    exercises: Exercise[];
}

export default function ExerciseListModal({
    isOpen,
    onClose,
    onClickExercise,
    exercises,
}: ExerciseListModalProps) {
    const [searchText, setSearchText] = useState('');

    const filteredExercises = useMemo(() => {
        return organizeMockExercises(
            exercises.filter((exercise) =>
                exercise.name.toLowerCase().startsWith(searchText.toLowerCase()),
            ),
        );
    }, [exercises, searchText]);

    return (
        <Modal height='full' isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
            <Modal.Content className='h-full w-[90%] bg-slate-900'>
                <Modal.CloseButton />
                <Modal.Header className='bg-slate-900'>
                    <View className='w-full items-start justify-center'>
                        <Text className='pb-2 text-lg font-semibold text-white'>
                            Add an Exercise
                        </Text>
                        <Input
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                            _focus={{
                                borderColor: colors.slate['100'],
                                selectionColor: colors.slate['100'],
                            }}
                            borderColor={colors.slate['500']}
                            selectionColor={colors.slate['500']}
                            placeholder='Search'
                            placeholderTextColor={colors.slate['400']}
                        />
                    </View>
                </Modal.Header>
                <Modal.Body className='w-full'>
                    <ExerciseList exercises={filteredExercises} onClickExercise={onClickExercise} />
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
