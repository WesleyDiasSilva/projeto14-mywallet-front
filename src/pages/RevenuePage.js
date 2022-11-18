import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API } from "../API.js";
import ButtonBackPage from "../components/ButtonBackPage.js";
import Input from "../components/Input";
import LongButton from "../components/LongButton";

function RevenuePage() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  function registerNewRevenue() {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const promise = axios.post(
      API + "/transaction",
      { value, description, type: "revenue" },
      { headers: { authorization: token } }
    );
    promise.then(() => navigate("/mywallet"));
    promise.catch((err) => console.log(err));
  }

  return (
    <Background>
      <Container>
        <Header>
          <ActionName>New Revenue</ActionName>
          <ButtonBackPage />
        </Header>
        <Input setValue={setValue} value={value} placeholder="Value" />
        <Input
          setValue={setDescription}
          value={description}
          placeholder="Description"
        />
        <LongButton onClick={registerNewRevenue} content="Add Revenue" />
      </Container>
    </Background>
  );
}

export default RevenuePage;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
`;

const ActionName = styled.span`
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
