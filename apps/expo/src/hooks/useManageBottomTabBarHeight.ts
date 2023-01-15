import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';

import useGlobalStore from './useGlobalStore';

const useManageBottomTabBarHeight = () => {
    const height = useBottomTabBarHeight();
    const { setBottomTabBarHeight } = useGlobalStore((state) => ({
        setBottomTabBarHeight: state.setBottomTabBarHeight,
    }));

    useEffect(() => {
        setBottomTabBarHeight(height);
    }, [height, setBottomTabBarHeight]);
};

export default useManageBottomTabBarHeight;
