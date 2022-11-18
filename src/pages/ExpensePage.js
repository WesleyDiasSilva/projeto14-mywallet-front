import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import LongButton from "../components/LongButton";
import axios from "axios";
import { API } from "../API.js";
import ButtonBackPage from "../components/ButtonBackPage";

function ExpensePage() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const user = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
      return;
    }
  }, []);
  const token = user?.token;
  function registerNewExpense() {
    const promise = axios.post(
      API + "/transaction",
      { value, description, type: "expense" },
      { headers: { authorization: token } }
    );
    promise.then(() => navigate("/mywallet"));
    promise.catch((err) => console.log(err));
  }

  return (
    <Background>
      <Container>
        <Header>
          <NameUser>New Expense</NameUser>
          <ButtonBackPage />
        </Header>
        <Input setValue={setValue} value={value} placeholder="Value" />
        <Input
          setValue={setDescription}
          value={description}
          placeholder="Description"
        />
        <LongButton onClick={registerNewExpense} content="Add Expense" />
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
