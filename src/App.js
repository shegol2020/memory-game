import styled from "styled-components";
import {useState} from "react";
//import {finishedItems, visibleItems} from "./data";

function App({images}) {
  return (
    <>
      <GameContainer>
          <CardContainer images={images}/>
      </GameContainer>
    </>
  );
}

const GameContainer = styled.section`
  width: 940px;
  margin: 0 auto 155px auto;
  display: grid;
  grid-template-columns: 460px auto 1fr;
  align-items: center;
  gap: 40px 20px;
  padding-top: 40px;
`

function CardContainer({images}){
    const [visibleItems, setVisibleItems] = useState(['hX_hf2lPpUU', '3tYZjGSBwbk']);
    const [finishedItems, setFinishedItems] = useState(['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1']);
    const cardClickHandler = (id) => {
        setVisibleItems(items => [...items, id]);
    }
    return <>
        <ul className="cards cards-theme-cars">
            {images.map(item => <Card
                key={item.id}
                id={item.id}
                url={item.url}
                description={item.description}
                isShown={visibleItems.includes(item.id)}
                isFinished={finishedItems.includes(item.id)}
                cardClick={cardClickHandler}
            />)}
        </ul>
    </>
}

function Card({url, description, isShown, isFinished, cardClick, id}){
    const className = `card ${isShown ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
    const handleClick = () => {
        if(isShown || isFinished){ return }
        cardClick(id)
    }
    return <>
        <li className={className} onClick={handleClick}>
            <img src={url} width="204" height="144" alt={description}/>
        </li>
    </>
}

export default App;
