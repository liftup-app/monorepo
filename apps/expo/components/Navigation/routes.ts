import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import Account from '../Account';
import NewWorkout from '../NewWorkout/NewWorkout';

const ROUTES = [
    { name: 'Home', icon: faHome, component: Account },
    { name: 'New Workout', icon: faPlus, component: NewWorkout },
];

export default ROUTES;
