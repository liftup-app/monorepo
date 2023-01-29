import { Button } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';

import useGlobalStore from '../../hooks/useGlobalStore';
import useManageBottomTabBarHeight from '../../hooks/useManageBottomTabBarHeight';

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
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
            className='h-full w-full flex-col bg-slate-800'
        >
            <Button onPress={() => setRecordingWorkout(true)}>Start Workout</Button>
        </ScrollView>
    );
}
