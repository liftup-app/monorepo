import { View } from 'react-native';

import useGlobalStore from '../../src/hooks/useGlobalStore';
import useManageBottomTabBarHeight from '../../src/hooks/useManageBottomTabBarHeight';
import { Button, ButtonText } from '../Button';

export default function NewWorkout() {
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);

    useManageBottomTabBarHeight();

    return (
        <View className='flex h-full w-full flex-1 flex-col items-center justify-center'>
            <Button onPress={() => setRecordingWorkout(true)}>
                <ButtonText>Start workout</ButtonText>
            </Button>
        </View>
    );
}
