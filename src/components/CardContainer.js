import {useState} from "react";
import Card from "./Card";

export default function CardContainer({images, onIncreaseCounter, onHandleClick, finishedItems}){
    const [visibleItems, setVisibleItems] = useState(['hX_hf2lPpUU', '3tYZjGSBwbk']);
    //const [finishedItems, setFinishedItems] = useState(['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1']);
    const cardClickHandler = (id) => {
        setVisibleItems(items => [...items, id]);
        onIncreaseCounter();
        onHandleClick(id);
    }
    return <>
        <ul className="cards cards-theme-cars">
            {images.map(item => <Card
                key={item.id}
                item={item}
                isShown={visibleItems.includes(item.id)}
                isFinished={finishedItems.includes(item.id)}
                cardClick={cardClickHandler}
            />)}
        </ul>
    </>
}