import 'react-native-url-polyfill/auto';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';

import Workout from '../../../components/Workout';
import useGlobalStore from '../../../hooks/useGlobalStore';
import BottomTabBar from './BottomTabBar';
import Header from './Header';
import ROUTES from './routes';

const Tab = createBottomTabNavigator();

export default function NavigationContainer() {
    const recordingWorkout = useGlobalStore((state) => state.recordingWorkout);

    return (
        <BaseNavigationContainer>
            <Tab.Navigator tabBar={BottomTabBar} initialRouteName='Home'>
                {ROUTES.map((route) => {
                    return (
                        <Tab.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                            options={{ header: Header }}
                        />
                    );
                })}
            </Tab.Navigator>
            {recordingWorkout && <Workout />}
        </BaseNavigationContainer>
    );
}
