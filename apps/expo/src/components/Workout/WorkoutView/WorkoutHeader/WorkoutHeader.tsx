import { useBottomSheet } from '@gorhom/bottom-sheet';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import Button from '../../../design-system/Button/Button';

interface WorkoutHeaderProps {
    time: string;
    name: string;
    onExpand?: () => void;
    onFinishWorkout?: (event: GestureResponderEvent) => void | null;
}

export default function WorkoutHeader({
    time,
    name,
    onExpand,
    onFinishWorkout,
}: WorkoutHeaderProps) {
    const { animatedIndex } = useBottomSheet();
    const headerFadeStyle = useAnimatedStyle(
        () => ({
            opacity: 1 - animatedIndex.value,
        }),
        [animatedIndex, animatedIndex.value],
    );

    const buttonFadeStyle = useAnimatedStyle(
        () => ({
            opacity: animatedIndex.value,
        }),
        [animatedIndex, animatedIndex.value],
    );

    return (
        <Pressable
            onPress={onExpand}
            className='flex w-full items-center justify-center border-b border-slate-800 bg-slate-900 bg-opacity-100 px-4 pt-2 pb-4'
        >
            <Animated.View
                style={headerFadeStyle}
                className='absolute top-2 flex items-center justify-start'
            >
                <Text className='text-lg font-semibold text-white'>{name}</Text>
                <Text className='text-sm font-semibold text-slate-300'>{time}</Text>
            </Animated.View>
            <Animated.View
                style={buttonFadeStyle}
                className='flex w-full flex-row items-start justify-end'
            >
                <Button
                    onPress={animatedIndex.value > 0.85 ? onFinishWorkout : undefined}
                    className='bg-emerald-600'
                >
                    Finish
                </Button>
            </Animated.View>
        </Pressable>
    );
}
