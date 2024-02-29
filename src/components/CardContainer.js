import {useState} from "react";
import Card from "./Card";

export default function CardContainer({images, onHandleClick, finishedItems}){
    const [visibleItems, setVisibleItems] = useState([]);
    const cardClickHandler = (id) => {
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
            return;
        }
        switch (visibleItems.length) {
            case 0:
                setVisibleItems([id]);
                break;
            case 1:
                setVisibleItems((items) => [...items, id]);
                onHandleClick(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleItems([]);
                }, 2000);
                break;
            default:
                setVisibleItems([]);
        }

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