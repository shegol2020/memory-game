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

// const Cards = styled.ul`
//   grid-column: 1 / -1;
//   display: grid;
//   grid-template-columns: repeat(4, 220px);
//   gap: 20px;
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   perspective: 1000px;
// `

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
        <StyledCard className={className}>
            <img src={url} width="204" height="144" alt={description}/>
        </StyledCard>
    </>
}

const StyledCard = styled.li`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 220px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #bad6eb;
  cursor: pointer;
  transition: transform var(--animation-duration);
  transform-style: preserve-3d;

  &:after {
    grid-area: 1 / 1 / 2 / 2;
    content: "";
    width: 218px;
    height: 158px;
    background-image: url("src/assets/img/back-cats.svg");
    background-repeat: no-repeat;
    background-position: center;
    backface-visibility: hidden;
  }

  &:before {
    content: "";
    grid-area: 1 / 1 / 2 / 2;
    width: 204px;
    height: 144px;
    border-radius: 5px;
    background-color: rgba(140, 174, 200, 0.6);
    background-image: url("src/assets/img/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition-property: opacity;
    z-index: 1;
  }
`


export default App;
