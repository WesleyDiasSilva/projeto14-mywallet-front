import axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import AppTitle from "../components/AppTitle";
import ChangePageLoginRegister from "../components/ChangePageLoginRegister";
import Input from "../components/Input";
import LongButton from "../components/LongButton";
import { API } from "../API.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function LoginPage() {
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    const result = axios.post(API + "/sign-in", { email, password });
    result.then((res) => {
      console.log(res);
      userContext.setUser({ name: res.data.user, token: res.data.token });
      localStorage.setItem(
        "token",
        JSON.stringify({ token: res.data.token, name: res.data.user })
      );
      setEmail("");
      setPassword("");
      navigate("/mywallet");
    });
    result.catch((err) => console.log(err));
  }

  return (
    <Background>
      <AppTitle />
      <ContainerInputs>
        <Input setValue={setEmail} value={email} placeholder="E-mail" />
        <Input
          type={"password"}
          setValue={setPassword}
          value={password}
          placeholder="Password"
        />
        <LongButton onClick={login} content={"Login"} />
      </ContainerInputs>
      <ChangePageLoginRegister to={"/sign-up"}>
        First time? Register!
      </ChangePageLoginRegister>
    </Background>
  );
}

export default LoginPage;

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

const ContainerInputs = styled.div`
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
