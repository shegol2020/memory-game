import styled from "styled-components";
import {useState} from "react";
//import {finishedItems, visibleItems} from "./data";

function App({images}) {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(i => i+1);
    }
  return (
    <>
      <GameContainer>
          <Progress/>
          <Steps className="steps">Шаг {counter}</Steps>
          <CardContainer images={images} increaseCounter={increaseCounter}/>
          <Modal>
              <h3 className="modal-caption">Победа!</h3>
              <p className="modal-description">Вы собрали все пары за {5} шагов</p>
              <button className="button modal-button" type="button">Новая игра</button>
          </Modal>
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

const Steps = styled.div`
  justify-self: end;
  padding: 8px 20px;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  background-color: #00ca51;
  border-radius: 22px;
`

function CardContainer({images, increaseCounter}){
    const [visibleItems, setVisibleItems] = useState(['hX_hf2lPpUU', '3tYZjGSBwbk']);
    const [finishedItems, setFinishedItems] = useState(['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1']);
    const cardClickHandler = (id) => {
        setVisibleItems(items => [...items, id]);
        increaseCounter();
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
                //increaseCounter={increaseCounter}
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

function Progress() {
    return <>
        <ProgressWrap>
            <ProgressContainer style={{width: `${5 / 6 * 100}%`}}></ProgressContainer>
        </ProgressWrap>
        <ProgressDescription className="progress-description">Открыто {5} / {6}</ProgressDescription>
    </>
}

const ProgressWrap = styled.div`
  display: flex;
  width: 460px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 8px;
`

const ProgressContainer = styled.div`
  background-color: #00ca51;
  border-radius: 8px;
  transition: width var(--animation-duration);
`

const ProgressDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
`

function Modal({children}){
    return (
        <div className="modal">
            <div className="modal-box">
                {children}
            </div>
        </div>
    );
}

export default App;
