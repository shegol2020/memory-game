import styled, {css} from "styled-components";

export default function ResultsTable({results, current}){
    const newResults = [...results, {name: "You", stepsCount: current}]
    return (
        <ResultTable>
            <thead>
            <ResultTableRow>
                <TableHeader>Rank</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Steps</TableHeader>
            </ResultTableRow>
            </thead>
            <tbody>
            {newResults.map(({name, stepsCount}, i) => {
                return ( <ResultTableRow key={name} $active={name === "You"}>
                    <TableData>{i+1}</TableData>
                    <TableData>{name}</TableData>
                    <TableData>{stepsCount}</TableData>
                </ResultTableRow>)
            })}
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
  
  ${(props) => 
          props.$active 
          ? css`
                font-weight: 600;
                color: #ffffff;
                background-color: #00ca51;
                  `
                  : ''}
  }
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