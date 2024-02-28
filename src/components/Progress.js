import styled from "styled-components";

export default function Progress({finishedItems}) {
    return <>
        <ProgressWrap>
            <ProgressContainer style={{width: `${finishedItems.length / 6 * 100}%`}}></ProgressContainer>
        </ProgressWrap>
        <ProgressDescription className="progress-description">Открыто {finishedItems.length} / {6}</ProgressDescription>
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