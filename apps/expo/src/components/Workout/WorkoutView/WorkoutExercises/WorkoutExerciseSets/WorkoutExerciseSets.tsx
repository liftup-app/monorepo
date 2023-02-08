import { Set } from '@liftup/mocks';
import { Dispatch, SetStateAction } from 'react';

import SetList from './SetList/SetList';
import SetListHeader from './SetListHeader/SetListHeader';

export interface WorkoutExerciseSetsProps {
    sets: Set[];
    setSets: Dispatch<SetStateAction<Set[]>>;
    onDeleteSet?: (set: Set) => void;
}

export default function WorkoutExerciseSets({
    sets,
    setSets,
    onDeleteSet,
}: WorkoutExerciseSetsProps) {
    return (
        <>
            <SetListHeader />
            <SetList setSets={setSets} sets={sets} onDeleteSet={onDeleteSet} />
        </>
    );
}
