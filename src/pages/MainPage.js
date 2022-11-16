import React from "react";
import styled from "styled-components";
import logout from "../assets/img/Vector.svg";
import ShortButton from "../components/ShortButton";
import addTransaction from "../assets/img/ant-design_plus-circle-outlined.svg";
import removeTransactions from "../assets/img/ant-design_minus-circle-outlined.svg";

function MainPage() {
  return (
    <Background>
      <Container>
        <Header>
          <NameUser>Olá, Fulano</NameUser>
          <Logout src={logout} />
        </Header>
        <TransactionsContainer>
          Não há registros de entrada ou saída
        </TransactionsContainer>
        <ActionsContainer>
        <ShortButton icon={addTransaction} text="New Revenue" link='/newRevenue'/>
        <ShortButton
          icon={removeTransactions}
          text="New Expense"
          link='/newExpense'
        />
        </ActionsContainer>
      </Container>
    </Background>
  );
}

export default MainPage;

const Background = styled.div`
  background-color: #8c11be;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameUser = styled.span`
  font-family: Raleway;
  font-size: 26px;
  font-weight: bold;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
`;

const Logout = styled.img`
  width: 24px;
  height: 24px;
`;

const TransactionsContainer = styled.div`
  height: 446px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: Raleway;
  color: #868686;
  font-size: 20px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 15px;
`