import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Set } from '@liftup/mocks';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import { useState } from 'react';
import { View } from 'react-native';
import { v4 as uuid } from 'uuid';

import Button from '../../../../design-system/Button/Button';
import SetListHeader from '../WorkoutExerciseSets/SetListHeader/SetListHeader';
import WorkoutExerciseSets from '../WorkoutExerciseSets/WorkoutExerciseSets';
import WorkoutExerciseHeader from './WorkoutExerciseHeader/WorkoutExerciseHeader';

export interface WorkoutExerciseProps {
    exercise: Exercise;
    onDeleteExercise?: (exercise: Exercise) => void;
}

export default function WorkoutExcercise({ exercise, onDeleteExercise }: WorkoutExerciseProps) {
    const [sets, setSets] = useState<Set[]>([{ id: uuid() }]);

    return (
        <View className='my-2 flex w-full items-start justify-center border-t border-slate-700 pt-2'>
            <WorkoutExerciseHeader exercise={exercise} onDeleteExercise={onDeleteExercise} />
            <WorkoutExerciseSets
                sets={sets}
                onDeleteSet={(set) =>
                    setSets(sets.filter((currentSet) => currentSet.id !== set.id))
                }
            />
            <Button
                onPress={() => setSets([...sets, { id: uuid() }])}
                size='xs'
                className='my-2 w-full bg-slate-800'
                icon={faPlus}
            >
                Add Set
            </Button>
        </View>
    );
}
