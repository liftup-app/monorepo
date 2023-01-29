import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import Account from '../../../components/Account';
import NewWorkout from '../../../components/NewWorkout/NewWorkout';

export interface Route {
    name: string;
    icon: IconDefinition;
    component: () => JSX.Element;
}

const ROUTES: Route[] = [
    { name: 'Home', icon: faHome, component: Account },
    { name: 'New Workout', icon: faPlus, component: NewWorkout },
];

export default ROUTES;
