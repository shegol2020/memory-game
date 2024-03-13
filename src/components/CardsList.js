import {useState} from "react";
import Card from "./Card";
import styled from "styled-components";

export default function CardsList({images, onHandleClick, finishedItems}){
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
        <CardsListRoot>
            {images.map(item => <Card
                key={item.id}
                item={item}
                isShown={visibleItems.includes(item.id)}
                isFinished={finishedItems.includes(item.id)}
                cardClick={cardClickHandler}
            />)}
        </CardsListRoot>
    </>
}

const CardsListRoot = styled.ul`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  perspective: 1000px; 
`;