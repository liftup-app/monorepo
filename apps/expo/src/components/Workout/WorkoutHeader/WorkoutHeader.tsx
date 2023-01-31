import { BottomSheetView as BaseBottomSheetView } from '@gorhom/bottom-sheet';
import { styled } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import Button from '../../design-system/Button/Button';

interface WorkoutHeaderProps {
    time: string;
    name: string;
    onExpand?: () => void;
    amountExpanded?: number;
}

const BottomSheetView = styled(BaseBottomSheetView);

export default function WorkoutHeader({
    time,
    name,
    onExpand,
    amountExpanded = 0,
}: WorkoutHeaderProps) {
    return (
        <BottomSheetView className='items-center justify-center'>
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
                className='absolute top-0 flex w-full flex-row items-center justify-end px-4'
            >
                <Button backgroundColor='#16a34a'>Finish Workout</Button>
            </View>
        </BottomSheetView>
    );
}
