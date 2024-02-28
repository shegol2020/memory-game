import {useState} from "react";

export default function useGame(images) {
    const [counter, setCounter] = useState(0);
    const [finishedItems, setFinishedItems] = useState([]);
    const increaseCounter = () => {
        setCounter(i => i+1);
    }
    const handleReset = () => {
        setFinishedItems([]);
        setCounter(0);
    };

    const handleClick = (id) => {
        setFinishedItems(items => [...items, id])
    }

    const isWin = finishedItems.length === 6; //hardcode

    return {
        handleReset,
        counter,
        increaseCounter,
        handleClick,
        isWin,
        finishedItems
    };
}