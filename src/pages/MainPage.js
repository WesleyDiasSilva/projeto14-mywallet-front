import React from "react";
import styled from "styled-components";
import logout from "../assets/img/Vector.svg";
import ShortButton from "../components/ShortButton";
import addTransaction from "../assets/img/ant-design_plus-circle-outlined.svg";
import removeTransactions from "../assets/img/ant-design_minus-circle-outlined.svg";
import Transaction from "../components/Transaction";

function MainPage() {

  const data = [
    { date: "15/11", description: "Salário", type: "revenue", value: 3000 },
    {
      date: "20/11",
      description: "Empréstimo Maria",
      type: "revenue",
      value: 500,
    },
    {
      date: "26/11",
      description: "Compras Churrasco",
      type: "expense",
      value: 67.6,
    },
    { date: "27/11", description: "Mercado", type: "expense", value: 542.54 },
    { date: "30/11", description: "Almoço mãe", type: "expense", value: 39.9 },
  ];

  return (
    <Background>
      <Container>
        <Header>
          <NameUser>Hello Dear!</NameUser>
          <Logout src={logout} />
        </Header>
        <TransactionsContainer type={data?.length}>
          {data.length > 0
            ? data.map((t) => <Transaction key={t.value} transaction={t} />)
            : "Não há registros de entrada ou saída"}
            {data.length > 0 ? <BalanceContainer>
            <BalanceTitle>Balance</BalanceTitle>
            <BalanceValue value={2849.96}>2849,96</BalanceValue>
          </BalanceContainer> : ""}
          
        </TransactionsContainer>
        <ActionsContainer>
          <ShortButton
            icon={addTransaction}
            text="New Revenue"
            link="/newRevenue"
          />
          <ShortButton
            icon={removeTransactions}
            text="New Expense"
            link="/newExpense"
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

const BalanceContainer = styled.div`
  width: calc(100% - 30px);
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BalanceTitle = styled.span`
  font-family: Raleway;
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;

const BalanceValue = styled.span`
  color: ${(props) => props.value > 0 ? "#03AC00" : "#C70000"};
  font-family: Raleway;
  font-size: 17px;
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
  justify-content: ${props => props.type > 1 ? "start" : "center"};
  align-items: center;
  font: Raleway;
  color: #868686;
  font-size: 20px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
