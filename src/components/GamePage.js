import styled from "styled-components";
import useGame from "../hooks/useGame";
import Progress from "./Progress";
import CardContainer from "./CardContainer";
import Modal from "./Modal";
import {Button} from "../styles/CommonComponents";

export default function GamePage ({images, onShowResult}){
    const {counter, handleClick, isWin, finishedItems} = useGame(images);
    const handleModalClick = () => {
        onShowResult(counter);
    }
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
                        <ModalCaption>Победа!</ModalCaption>
                        <ModalDescription>Вы собрали все пары за {counter} шагов</ModalDescription>
                        <ModalButton type="button" onClick={handleModalClick}>Новая игра</ModalButton>
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

const ModalCaption = styled.h3`
  margin: 0 0 12px;
  font-size: 24px;
  line-height: 32px;
`;

const ModalDescription = styled.p`
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 22px;
`;

const ModalButton = styled(Button)`
  width: 100%;
`;