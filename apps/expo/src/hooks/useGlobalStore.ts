import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface GlobalState {
    user: User | null;
    setUser: (to: User | null) => void;
    recordingWorkout: boolean;
    setRecordingWorkout: (to: boolean) => void;
    bottomTabBarHeight: number | null;
    setBottomTabBarHeight: (to: number) => void;
}

const useGlobalStore = create<GlobalState>()((set) => ({
    user: null,
    setUser: (to) => set(() => ({ user: to })),
    recordingWorkout: false,
    setRecordingWorkout: (to) => set(() => ({ recordingWorkout: to })),
    bottomTabBarHeight: null,
    setBottomTabBarHeight: (to) => set(() => ({ bottomTabBarHeight: to })),
}));

export default useGlobalStore;
