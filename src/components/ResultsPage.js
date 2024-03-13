import ResultsTable from "./ResultsTable";
import {Container, Button} from "../styles/CommonComponents";
import styled from "styled-components";

export default function ResultsPage({results, current, onResetGame}){
    return (
        <ResultWrapper>
            <h2>Best results</h2>
            <p>Your result is <b>{current} steps</b>, well done!</p>
            <ResultsTable results={results} current={current}/>
            <p>Try again!</p>
            <ResultButton type="button" onClick={onResetGame}>New game</ResultButton>
        </ResultWrapper>
    );
}

const ResultWrapper = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`

const ResultButton = styled(Button)`
  width: 160px;
`

