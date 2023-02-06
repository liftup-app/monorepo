import { Set } from '@liftup/mocks';

import SetList from './SetList/SetList';
import SetListHeader from './SetListHeader/SetListHeader';

export interface WorkoutExerciseSetsProps {
    sets: Set[];
    onDeleteSet?: (set: Set) => void;
}

export default function WorkoutExerciseSets({ sets, onDeleteSet }: WorkoutExerciseSetsProps) {
    return (
        <>
            <SetListHeader />
            <SetList sets={sets} onDeleteSet={onDeleteSet} />
        </>
    );
}
