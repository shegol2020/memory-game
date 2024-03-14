import React from 'react';
import styled from "styled-components";
import {Button, Container} from "../styles/CommonComponents";
import {GAME_TYPES} from "../data";

const InitialPage = () => {

    const handleStart = (type) => {
       console.log(`start ${type}`)
    };
    return (
        <RulesWrapper>
            <h2>Welcome!</h2>
            <p>Memory - a game for training visual memory</p>
            <RulesTextWrapper>
                <h3>Game rules</h3>
                <RulesList>
                    <RulesListItem>The set contains many cards - two of each with the same design.</RulesListItem>
                    <RulesListItem>You need to lay out the cards face down on the table, and then turn them over two at a time.</RulesListItem>
                    <RulesListItem>If they match, the player takes them and gets another turn.</RulesListItem>
                </RulesList>
            </RulesTextWrapper>
            {GAME_TYPES.map(({type}) => (
                <RulesButton
                    key={type}
                    type={type}
                    onClick={() => handleStart(type)}
                >
                    {type}
                </RulesButton>
            ))}
        </RulesWrapper>
    );
};

const RulesWrapper = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`

const RulesTextWrapper = styled.div`
  width: 570px;
  margin: 36px auto 40px;
  padding: 24px 32px 36px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(140, 174, 200, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`

const RulesList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 22px;
  list-style: none;
  text-align: left;
`

const RulesListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`

const RulesButton = styled(Button)`
  padding: 16px 24px 16px 56px;
  margin: 0 20px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  border: none;
  background-color: #ffbf20;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  background-position: left 24px center;
  background-repeat: no-repeat;
  
  ${({ type }) => {
    switch (type) {
      case 'cats':
        return `
          background-image: url("/assets/img/icon-cats.svg");
        `;
      case 'cars':
        return `
          background-image: url("/assets/img/icon-cars.svg");
        `;
      case 'flowers':
        return `
          background-image: url("/assets/img/icon-flowers.svg");
        `;
      default:
        return '';
    }
  }}
`

export default InitialPage;