import { useEffect, useState } from 'react';

const useTimer = (initialTime = new Date(), pingDelay = 100): number => {
    const [startTime] = useState(initialTime);
    const [currentTime, setCurrentTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, pingDelay);

        return () => clearInterval(interval);
    }, [pingDelay]);

    return currentTime.getTime() - startTime.getTime();
};

export default useTimer;
