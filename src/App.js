import styled from "styled-components";
import {finishedItems, visibleItems} from "./data";

function App({images}) {
  return (
    <>
      <GameContainer>
          <CardContainer images={images}  visibleItems={visibleItems} finishedItems={finishedItems}/>
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

function CardContainer({images, visibleItems, finishedItems}){
    return <>
        <ul className="cards cards-theme-cars">
            {images.map(item => <Card
                key={item.id}
                url={item.url}
                description={item.description}
                isShown={visibleItems.includes(item.id)}
                isFinished={finishedItems.includes(item.id)}
            />)}
        </ul>
    </>
}

function Card({url, description, isShown, isFinished}){
    const className = `card ${isShown ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
    return <>
        <li className={className}>
            <img src={url} width="204" height="144" alt={description}/>
        </li>
    </>
}

export default App;
