import {useState} from "react";

export default function useGame(images) {
    const [counter, setCounter] = useState(0);
    const [finishedItems, setFinishedItems] = useState([]);
    const increaseCounter = () => {
        setCounter(i => i+1);
    }

    const handleClick = (id1, id2) => {
        const firstItem = images.find(({id}) => id === id1);
        const secondItem = images.find(({id}) => id === id2);
        if(firstItem.url === secondItem.url){
            setFinishedItems(items => [...items, id1, id2])
        }
        increaseCounter();
    }

    const isWin = finishedItems.length === images.length;
    //const isWin =true;

    return {
        counter,
        handleClick,
        isWin,
        finishedItems
    };
}