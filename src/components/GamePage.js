import styled from "styled-components";
import useGame from "../hooks/useGame";
import Progress from "./Progress";
import CardContainer from "./CardContainer";
import Modal from "./Modal";

export default function GamePage ({images}){
    const {handleReset, counter, handleClick, isWin, finishedItems} = useGame(images);
    return (
        <>
            <GameContainer>
                <Progress value={finishedItems.length/2} max={images.length/2}/>
                <Steps>Шаг {counter}</Steps>
                <CardContainer
                    images={images}
                    onHandleClick={handleClick}
                    finishedItems={finishedItems}
                />
                {isWin && (<Modal>
                        <h3 className="modal-caption">Победа!</h3>
                        <p className="modal-description">Вы собрали все пары за {counter} шагов</p>
                        <button className="button modal-button" type="button" onClick={handleReset}>Новая игра</button>
                    </Modal>
                )}
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