import styled from "styled-components";

export default function ResultsTable(){
    return (
        <ResultTable>
            <thead>
            <ResultTableRow>
                <TableHeader>Место</TableHeader>
                <TableHeader>Имя</TableHeader>
                <TableHeader>Шаги</TableHeader>
            </ResultTableRow>
            </thead>
            <tbody>
                <ResultTableRow>
                    <TableData>{1}</TableData>
                    <TableData>{"test"}</TableData>
                    <TableData>{5}</TableData>
                </ResultTableRow>
            </tbody>
        </ResultTable>
    );
}

const ResultTable = styled.table`
  width: 520px;
  margin: 36px auto 32px;
  font-size: 16px;
  line-height: 22px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
  border-radius: 10px;
  border-collapse: collapse;
`

const ResultTableRow = styled.tr`
  display: grid;
  grid-template-columns: 120px 260px 140px;
  align-items: center;
`;

const TableHeader = styled.th`
  padding: 18px 32px 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #8caec8;
  text-align: left;
`;

const TableData = styled.td`
  padding: 8px 32px;
  text-align: left;
`;