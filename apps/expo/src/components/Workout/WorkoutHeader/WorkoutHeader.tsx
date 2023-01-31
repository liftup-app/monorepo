import { BottomSheetView as BaseBottomSheetView } from '@gorhom/bottom-sheet';
import { styled } from 'nativewind';
import { Pressable, Text } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout, Transition } from 'react-native-reanimated';

interface WorkoutHeaderProps {
    time: string;
    name: string;
    onExpand?: () => void;
    expanded?: boolean;
}

const BottomSheetView = styled(BaseBottomSheetView);

export default function WorkoutHeader({
    time,
    name,
    onExpand,
    expanded = false,
}: WorkoutHeaderProps) {
    return (
        <BottomSheetView className='items-center justify-center'>
            {expanded && (
                <Animated.View layout={Layout.duration(500)} entering={FadeIn} exiting={FadeOut}>
                    <Pressable
                        className='flex h-full w-full items-center justify-start'
                        onPress={onExpand}
                    >
                        <Text className='text-lg font-semibold text-white'>{name}</Text>
                        <Text className='text-sm font-semibold text-slate-300'>{time}</Text>
                    </Pressable>
                </Animated.View>
            )}
        </BottomSheetView>
    );
}
