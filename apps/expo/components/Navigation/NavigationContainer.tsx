import 'react-native-url-polyfill/auto';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { styled } from 'nativewind';

import useGlobalStore from '../../src/hooks/useGlobalStore';
import Account from '../Account';
import NewWorkout from '../NewWorkout/NewWorkout';
import Workout from '../Workout';

const Tab = createBottomTabNavigator();

interface NavigationProps {
    focused: boolean;
    icon: IconDefinition;
}

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

function NavigationIcon({ focused, icon }: NavigationProps) {
    return (
        <FontAwesomeIcon className={focused ? 'text-slate-800' : 'text-slate-400'} icon={icon} />
    );
}

export default function NavigationContainer() {
    const recordingWorkout = useGlobalStore((state) => state.recordingWorkout);

    return (
        <BaseNavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name='Home'
                    component={Account}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <NavigationIcon focused={focused} icon={faHome} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='New Workout'
                    component={NewWorkout}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <NavigationIcon focused={focused} icon={faPlus} />
                        ),
                    }}
                />
            </Tab.Navigator>
            {recordingWorkout && <Workout />}
        </BaseNavigationContainer>
    );
}
