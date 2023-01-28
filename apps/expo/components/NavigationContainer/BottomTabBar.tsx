import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import BottomTabBarButton from './BottomTabBarButton';
import ROUTES from './routes';

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {
    return (
        <View className='flex h-20 w-full flex-row items-center justify-around border-t border-slate-700 bg-slate-800'>
            {state.routes.map((route, index) => {
                const focused = index === state.index;

                return (
                    <BottomTabBarButton
                        onPress={() => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!focused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        }}
                        onLongPress={() => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        }}
                        key={route.key}
                        focused={index === state.index}
                        screenName={route.name}
                        icon={ROUTES[index]?.icon}
                    />
                );
            })}
        </View>
    );
}
