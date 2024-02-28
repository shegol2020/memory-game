import {useState} from "react";

export default function useGame(images) {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(i => i+1);
    }
    const handleReset = () => {
        //setFinishedItems([]);
        setCounter(0);
    };

    return {
        handleReset,
        counter,
        increaseCounter
    };
}