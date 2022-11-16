import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import LongButton from "../components/LongButton";

function ExpensePage() {
  return (
    <Background>
      <Container>
        <Header>
          <NameUser>New Expense</NameUser>
        </Header>
        <Input placeholder='Value'/>
        <Input placeholder='Description'/>
        <LongButton content='Add Expense'/>
      </Container>
    </Background>
  );
}

export default ExpensePage;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
`;

const NameUser = styled.span`
  font-family: Raleway;
  font-size: 26px;
  font-weight: bold;
`;

const Background = styled.div`
  background-color: #8c11be;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
