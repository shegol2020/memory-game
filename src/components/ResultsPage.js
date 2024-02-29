import ResultsTable from "./ResultsTable";
import {Container, Button} from "../styles/CommonComponents";
import styled from "styled-components";

export default function ResultsPage(){
    return (
        <ResultContainer>
            <h2>Лучшие результаты:</h2>
            <p>Вы завершили игру за <b>{5} шагов</b>, так держать!</p>
            <ResultsTable current={5} results={5} />
            <p>Хотите попробовать ещё раз?</p>
            <ResultButton type="button">Новая игра</ResultButton>
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

