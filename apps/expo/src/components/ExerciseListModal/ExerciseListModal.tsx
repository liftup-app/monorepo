import { OrganizedExercises } from '@liftup/mocks';
import { IModalProps, Modal } from 'native-base';
import { ScrollView, View } from 'react-native';

import ExerciseList from './ExerciseList/ExerciseList';

export interface ExerciseListModalProps extends IModalProps {
    onClickExercise?: () => void;
    onClose?: () => void;
    exercises: OrganizedExercises;
}

export default function ExerciseListModal({
    isOpen,
    onClose,
    onClickExercise,
    exercises,
}: ExerciseListModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
            <Modal.Content className='w-[90%] bg-slate-900'>
                <Modal.CloseButton />
                <Modal.Header className='bg-slate-900'>Add an Exercise</Modal.Header>
                <Modal.Body className='w-full'>
                    <View className='flex flex-1'>
                        <ExerciseList exercises={exercises} onClickExercise={onClickExercise} />
                    </View>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
