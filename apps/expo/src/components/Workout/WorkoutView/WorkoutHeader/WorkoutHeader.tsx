import { GestureResponderEvent, Pressable, Text, View } from 'react-native';

import Button from '../../../design-system/Button/Button';

interface WorkoutHeaderProps {
    time: string;
    name: string;
    onExpand?: () => void;
    onFinishWorkout?: (event: GestureResponderEvent) => void | null;
    amountExpanded?: number;
}

export default function WorkoutHeader({
    time,
    name,
    onExpand,
    onFinishWorkout,
    amountExpanded = 0,
}: WorkoutHeaderProps) {
    return (
        <View className='flex h-20 items-center justify-center'>
            <Pressable
                style={{ opacity: 1 - amountExpanded }}
                className='absolute top-0 flex w-full items-center justify-start'
                onPress={amountExpanded < 0.15 ? onExpand : undefined}
            >
                <Text className='text-lg font-semibold text-white'>{name}</Text>
                <Text className='text-sm font-semibold text-slate-300'>{time}</Text>
            </Pressable>
            <View
                style={{ opacity: amountExpanded }}
                className='absolute top-0 flex w-full flex-row items-center justify-end'
            >
                <Button
                    onPress={amountExpanded > 0.85 ? onFinishWorkout : undefined}
                    backgroundColor='#16a34a'
                >
                    Finish
                </Button>
            </View>
        </View>
    );
}
