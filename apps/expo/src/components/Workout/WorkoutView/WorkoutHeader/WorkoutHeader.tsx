import { BottomSheetHandle, BottomSheetHandleProps } from '@gorhom/bottom-sheet';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import Button from '../../../design-system/Button/Button';

interface WorkoutHeaderProps extends BottomSheetHandleProps {
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
    animatedIndex,
    ...handleProps
}: WorkoutHeaderProps) {
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
        <BottomSheetHandle animatedIndex={animatedIndex} {...handleProps}>
            <Pressable
                onPress={onExpand}
                className='flex h-20 w-full items-center justify-start border-b border-slate-800'
            >
                <Animated.View
                    style={headerFadeStyle}
                    className='absolute top-2 flex w-full items-center justify-start'
                >
                    <Text className='text-lg font-semibold text-white'>{name}</Text>
                    <Text className='text-sm font-semibold text-slate-300'>{time}</Text>
                </Animated.View>
                <Animated.View
                    style={buttonFadeStyle}
                    className='absolute top-2 right-4 flex w-full flex-row items-center justify-end'
                >
                    <Button
                        onPress={animatedIndex.value > 0.85 ? onFinishWorkout : undefined}
                        className='bg-emerald-600'
                    >
                        Finish
                    </Button>
                </Animated.View>
            </Pressable>
        </BottomSheetHandle>
    );
}
