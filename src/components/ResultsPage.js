import ResultsTable from "./ResultsTable";
import {Container, Button} from "../styles/CommonComponents";
import styled from "styled-components";

export default function ResultsPage({results, current, onResetGame}){
    const newResults = [...results, {name: "You", stepsCount: current}]
    return (
        <ResultContainer>
            <h2>Best results</h2>
            <p>Your result is <b>{current} steps</b>, well done!</p>
            <ResultsTable results={newResults} />
            <p>Try again!</p>
            <ResultButton type="button" onClick={onResetGame}>New game</ResultButton>
        </ResultContainer>
    );
}

const ResultContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`

const ResultButton = styled(Button)`
  width: 160px;
`

