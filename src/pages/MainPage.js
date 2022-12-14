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
import ModalDelete from "../components/ModalDelete";
import ModalUpdate from "../components/ModalUpdate";
import avatarDefatul from "../assets/img/avatardefault.svg";

function MainPage() {
  const [transactions, setTransactions] = React.useState([]);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [modalUpdate, setModalUpdate] = React.useState(false);
  const [typeUpdate, setTypeUpdate] = React.useState("");
  const [valueTransactionDelete, setValueTransactionDelete] =
    React.useState("");
  const [valueTransactionUpdate, setValueTransactionUpdate] =
    React.useState("");
  const [imageCorrection, setImageCorrection] = React.useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (!user) {
      navigate("/sign-in");
      return;
    }
    const { token, name, image } = user;
    const promise = axios.get(API + "/transaction", {
      headers: { authorization: token },
    });

    promise.then((res) => {
      setTransactions(res.data.reverse());
    });

    promise.catch((err) => console.log(err));
    if (!userContext.name) {
      userContext.setUser({ name, token, image });
    }
  }, [modal, modalUpdate, imageCorrection]);

  let balance = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "revenue") {
      balance += Number(transaction.value);
      return;
    }
    if (transaction.type === "expense") {
      balance -= Number(transaction.value);
    }
  });

  function logoutUser() {
    localStorage.removeItem("token");
    userContext.setUser({});
    navigate("/sign-in");
  }

  function updateImage() {
    setTypeUpdate("user");
    setModalUpdate(true);
    // const promise = `${API}/`
  }

  function errorImage() {
    const user = JSON.parse(localStorage.getItem("token"));
    user.image = "";
    localStorage.setItem("token", JSON.stringify(user));
    setImageCorrection(!imageCorrection);
  }

  return (
    <Background>
      {modal && (
        <ModalDelete
          setModal={setModal}
          valueTransactionDelete={valueTransactionDelete}
        />
      )}
      {modalUpdate && (
        <ModalUpdate
          user={{ name: userContext.user.name, image: userContext.user.image }}
          setTypeUpdate={setTypeUpdate}
          type={typeUpdate}
          transaction={valueTransactionUpdate}
          setModalUpdate={setModalUpdate}
        />
      )}
      <Container>
        <Header>
          <NameUser>Hello {userContext.user.name}!</NameUser>
          <ContainerHeaderControls>
            <Avatar
              onErrorCapture={errorImage}
              onClick={updateImage}
              src={
                userContext.user.image ? userContext.user.image : avatarDefatul
              }
            />
            <Logout onClick={logoutUser} src={logout} />
          </ContainerHeaderControls>
        </Header>
        <TransactionsContainer type={transactions?.length}>
          {transactions.length > 0
            ? transactions
                .reverse()
                .map((t) => (
                  <Transaction
                    setValueTransactionUpdate={setValueTransactionUpdate}
                    setModalUpdate={setModalUpdate}
                    setValueTransactionDelete={setValueTransactionDelete}
                    setModal={setModal}
                    key={t._id}
                    transaction={t}
                  />
                ))
            : "N??o h?? registros de entrada ou sa??da"}
        </TransactionsContainer>
        {transactions.length > 0 ? (
          <BalanceContainer>
            <BalanceTitle>Balance</BalanceTitle>
            <BalanceValue value={balance}>{balance}</BalanceValue>
          </BalanceContainer>
        ) : (
          ""
        )}
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

const ContainerHeaderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`;

const NameUser = styled.span`
  font-family: Raleway;
  font-size: 26px;
  font-weight: bold;
`;

const BalanceContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const BalanceTitle = styled.span`
  font-family: Raleway;
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;

const BalanceValue = styled.span`
  color: ${(props) =>
    props.value > 0 ? "#03AC00" : props.value < 0 ? "#C70000" : "#000"};
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
  height: 350px;
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;
  border-radius: 10px 0px 0px 0px;
  display: flex;
  justify-content: ${(props) => (props.type > 0 ? "start" : "center")};
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
