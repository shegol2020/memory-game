import styled from "styled-components";

export default function Modal({children}){
    return (
        <ModalRoot>
            <ModalBox>
                {children}
            </ModalBox>
        </ModalRoot>
    );
}

const ModalRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(140, 174, 200, 0.8);
  overflow-y: hidden;
  overscroll-behavior: contain;
  pointer-events: auto;

  /* visibility: hidden; */
  /* opacity: 0; */
  animation: fadeIn calc(var(--animation-duration) + 0.1s) calc(2 * var(--animation-duration)) both;


  @keyframes fadeIn {
    from {
      /* visibility: hidden; */
      opacity: 0;
    }

    to {
      /* visibility: visible; */
      opacity: 1;
    }
  }
`

const ModalBox = styled.div`
  position: relative;
  width: 320px;
  min-height: 285px;
  max-height: calc(100vh - 60px);
  padding: 72px 40px 36px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  
  &:before{
    content: "";
    position: absolute;
    top: -75px;
    left: -30px;
    width: 376px;
    height: 130px;
    background-image: url("/assets/img/ribbon-with-stars.svg");
    background-position: top center;
    background-repeat: no-repeat;
  }
`