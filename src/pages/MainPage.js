import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import logout from "../assets/img/Vector.svg";
import ShortButton from "../components/ShortButton";
import addTransaction from "../assets/img/ant-design_plus-circle-outlined.svg";
import removeTransactions from "../assets/img/ant-design_minus-circle-outlined.svg";
import Transaction from "../components/Transaction";
import axios from "axios";
import { API } from "../API.js";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function MainPage() {

  const [transactions, setTransactions] = React.useState([])
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=> {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const promise = axios.get(API+"/transaction",{headers: {authorization: token}})
    promise.then(res => {
      setTransactions(res.data)
    });
    
    promise.catch(err => console.log(err));
  }, [userContext])

  let balance = 0;
  transactions.forEach((transaction) => {
    if(transaction.type === "revenue"){
      balance += Number(transaction.value)
      return;
    }
    if(transaction.type === "expense"){
      balance -= Number(transaction.value)
    }
  })

  function logoutUser(){
    localStorage.removeItem("token");
    userContext.setUser({});
    navigate("/sign-in")
  }

  return (
    <Background>
      <Container>
        <Header>
          <NameUser>Hello {userContext.user.name}!</NameUser>
          <Logout onClick={logoutUser} src={logout} />
        </Header>
        <TransactionsContainer type={transactions?.length}>
          {transactions.length > 0
            ? transactions.map((t) => <Transaction key={t.value} transaction={t} />)
            : "Não há registros de entrada ou saída"}
            {transactions.length > 0 ? <BalanceContainer>
            <BalanceTitle>Balance</BalanceTitle>
            <BalanceValue value={balance}>{balance}</BalanceValue>
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
  color: ${(props) => props.value > 0 ? "#03AC00" : props.value < 0 ? "#C70000" : "#000"};
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
  cursor: pointer;
`;

const TransactionsContainer = styled.div`
  height: 446px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: ${props => props.type > 0 ? "start" : "center"};
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
