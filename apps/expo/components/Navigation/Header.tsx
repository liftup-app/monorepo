import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

export default function Header({ route }: BottomTabHeaderProps) {
    return (
        <View className='h-8 w-full items-center justify-end bg-slate-800 pb-2'>
            <Text className='font-extrabold text-white'>{route.name}</Text>
        </View>
    );
}
