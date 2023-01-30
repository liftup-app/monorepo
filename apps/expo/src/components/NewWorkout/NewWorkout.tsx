import { Button, Text, View } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';

import useGlobalStore from '../../hooks/useGlobalStore';
import useManageBottomTabBarHeight from '../../hooks/useManageBottomTabBarHeight';
import Templates from './Templates';

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
    },
});

export default function NewWorkout() {
    const setRecordingWorkout = useGlobalStore((state) => state.setRecordingWorkout);

    useManageBottomTabBarHeight();

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            className='h-full w-full flex-col bg-slate-900 p-4'
        >
            <View className='flex w-full items-start justify-center space-y-2 pb-8'>
                <Text className='w-full text-start text-lg font-semibold'>Quick Start</Text>
                <Button className='w-full' onPress={() => setRecordingWorkout(true)}>
                    Start an empty workout
                </Button>
            </View>
            <Templates />
        </ScrollView>
    );
}
