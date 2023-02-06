import { time } from '@liftup/utils';
import { useEffect, useState } from 'react';

const useTimer = (initialTime = new Date(), pingDelay = 100): string => {
    const [startTime] = useState(initialTime);
    const [currentTime, setCurrentTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, pingDelay);

        return () => clearInterval(interval);
    }, [pingDelay]);

    return time.msToYoutubeTimeString(currentTime.getTime() - startTime.getTime());
};

export default useTimer;
