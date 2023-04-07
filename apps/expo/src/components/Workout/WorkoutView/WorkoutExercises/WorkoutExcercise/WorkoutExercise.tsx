import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Set } from '@liftup/mocks';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import { useState } from 'react';
import { View } from 'react-native';
import { v4 as uuid } from 'uuid';

import Button from '../../../../design-system/Button/Button';
import WorkoutExerciseSets from '../WorkoutExerciseSets/WorkoutExerciseSets';
import WorkoutExerciseHeader from './WorkoutExerciseHeader/WorkoutExerciseHeader';

export interface WorkoutExerciseProps {
    exercise: Exercise;
    onDeleteExercise?: (exercise: Exercise) => void;
    onReplaceExercise?: (currentExercise: Exercise, newExercise: Exercise) => void;
}

export default function WorkoutExcercise({
    exercise,
    onDeleteExercise,
    onReplaceExercise,
}: WorkoutExerciseProps) {
    const [sets, setSets] = useState<Set[]>([{ id: uuid() }]);

    return (
        <View className='my-2 flex w-full items-start justify-center border-b border-slate-700 pt-2'>
            <WorkoutExerciseHeader
                exercise={exercise}
                onDeleteExercise={onDeleteExercise}
                onReplaceExercise={onReplaceExercise}
            />
            <WorkoutExerciseSets
                sets={sets}
                setSets={setSets}
                onDeleteSet={(set) =>
                    setSets(sets.filter((currentSet) => currentSet.id !== set.id))
                }
            />
            <View className='flex w-full px-4 pb-2'>
                <Button
                    onPress={() => setSets([...sets, { id: uuid() }])}
                    size='xs'
                    className='my-2 flex w-full bg-slate-800'
                    icon={faPlus}
                >
                    Add Set
                </Button>
            </View>
        </View>
    );
}
