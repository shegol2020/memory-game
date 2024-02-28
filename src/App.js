import styled from "styled-components";
import {useState} from "react";
import Progress from "./components/Progress";
import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";
import useGame from "./hooks/useGame";

function App({images = []}) {
  const {handleReset, counter, increaseCounter} = useGame(images);
  return (
    <>
      <GameContainer>
          <Progress/>
          <Steps>Шаг {counter}</Steps>
          <CardContainer images={images} increaseCounter={increaseCounter}/>
          <Modal>
              <h3 className="modal-caption">Победа!</h3>
              <p className="modal-description">Вы собрали все пары за {counter} шагов</p>
              <button className="button modal-button" type="button" onClick={handleReset}>Новая игра</button>
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

export default App;
