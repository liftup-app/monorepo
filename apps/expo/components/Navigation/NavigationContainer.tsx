import 'react-native-url-polyfill/auto';

import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';

import useGlobalStore from '../../src/hooks/useGlobalStore';
import Account from '../Account';
import NewWorkout from '../NewWorkout/NewWorkout';
import Workout from '../Workout';

const Tab = createBottomTabNavigator();

interface NavigationProps {
    focused: boolean;
}

const Icon = styled(FontAwesomeIcon);

function NavigationIcon({ focused }: NavigationProps) {
    return <Icon className={focused ? 'text-slate-800' : 'text-slate-400'} icon={faPlus} />;
}

export default function NavigationContainer() {
    const recordingWorkout = useGlobalStore((state) => state.recordingWorkout);

    return (
        <BaseNavigationContainer>
            <StatusBar style='dark' />
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name='Home'
                    component={Account}
                    options={{ tabBarIcon: NavigationIcon }}
                />
                <Tab.Screen
                    name='New Workout'
                    component={NewWorkout}
                    options={{ tabBarIcon: NavigationIcon }}
                />
            </Tab.Navigator>
            {recordingWorkout && <Workout />}
        </BaseNavigationContainer>
    );
}
