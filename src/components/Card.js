import styled, {css} from "styled-components";

export default function Card({item, isShown, isFinished, cardClick}){
    const {url, id, description} = item;const handleClick = () => {
        if(isShown || isFinished){ return }
        cardClick(id)
    }
    return <>
        <CardRoot onClick={handleClick} $isShown={isShown} $isFinished={isFinished}>
            <CardImg src={url} width="204" height="144" alt={description}/>
        </CardRoot>
    </>
}

const CardRoot = styled.li`
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
    background-image: url("assets/img/back-cats.svg");
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
    background-image: url("assets/img/check.svg");
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition-property: opacity;
    z-index: 1;
  }
  
  &:hover{
    box-shadow: 0 6px 16px rgba(140, 174, 200, 0.6);
  }
  
  ${(props) => 
        props.$isShown
            ? css `
                  transform: rotateY(180deg);
                  cursor: default;
            `
            : ''}

  ${(props) =>
          props.$isFinished
                  ? css `
                    transform: rotateY(180deg);
                    cursor: default;
            
                    &:before {
                      opacity: 1;
                      transition-delay: var(--animation-duration);
                      transition-duration: var(--animation-duration);
                      transition-timing-function: ease-in-out;
            `
                  : ''}
`;

const CardImg = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  border-radius: 5px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`