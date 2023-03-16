import { useState, useEffect } from 'react';

const useCounter = (forwoard = true) => {
    const [counter, setCounter] = useState(0);
    let calc = forwoard ? (prevCounter) => prevCounter + 1 : (prevCounter) => prevCounter - 1
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(calc);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
};

export default useCounter;