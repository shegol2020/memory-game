import styled from "styled-components";
import useGame from "../hooks/useGame";
import Progress from "./Progress";
import CardsList from "./CardsList";
import Modal from "./Modal";
import {Button} from "../styles/CommonComponents";

export default function GamePage ({images, backImage, onShowResult}){
    const {counter, handleClick, isWin, finishedItems} = useGame(images);
    const handleModalClick = () => {
        onShowResult(counter);
    }
    return (
        <>
            <GameWrapper>
                <Progress value={finishedItems.length/2} max={images.length/2}/>
                <Steps>Шаг {counter}</Steps>
                <CardsList
                    images={images}
                    backImage={backImage}
                    onHandleClick={handleClick}
                    finishedItems={finishedItems}
                />
                {isWin && (<Modal>
                        <ModalCaption>You won!</ModalCaption>
                        <ModalDescription>Let's check the results</ModalDescription>
                        <ModalButton type="button" onClick={handleModalClick}>Show results</ModalButton>
                    </Modal>
                )}
            </GameWrapper>
        </>
    );
}


const GameWrapper = styled.section`
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