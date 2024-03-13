import styled from "styled-components";

export default function Progress({value, max }) {
    return <>
        <ProgressWrap>
            <ProgressIndicator style={{width: `${value / max * 100}%`}}></ProgressIndicator>
        </ProgressWrap>
        <ProgressDescription className="progress-description">Открыто {value} / {max}</ProgressDescription>
    </>
}

const ProgressWrap = styled.div`
  display: flex;
  width: 460px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 8px;
`

const ProgressIndicator = styled.div`
  background-color: #00ca51;
  border-radius: 8px;
  transition: width var(--animation-duration);
`

const ProgressDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
`