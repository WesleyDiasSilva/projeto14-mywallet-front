import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import AppTitle from "../components/AppTitle";
import LongButton from "../components/LongButton";
import ChangePageLoginRegister from "../components/ChangePageLoginRegister";
import { API } from "../API.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [image, setImage] = React.useState();

  const navigate = useNavigate();

  function register() {
    const promise = axios.post(API + "/sign-up", {
      name,
      email,
      password,
      confirmPassword,
      image,
    });
    promise.then((res) => {
      console.log(res);
      navigate("/sign-in");
    });
    promise.catch((res) => console.log(res));
  }

  return (
    <Background>
      <AppTitle />
      <ContainerInputs>
        <Input setValue={setName} value={name} placeholder="Name" />
        <Input setValue={setEmail} value={email} placeholder="E-mail" />
        <Input value={image} setValue={setImage} placeholder="Image URL" />
        <Input
          typeForm={"password"}
          setValue={setPassword}
          value={password}
          placeholder="Password"
        />
        <Input
          typeForm={"password"}
          setValue={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
        />
        <LongButton onClick={register} content={"Register"} />
      </ContainerInputs>
      <ChangePageLoginRegister to={"/sign-in"}>
        Have you already a account? Get in now!
      </ChangePageLoginRegister>
    </Background>
  );
}

export default RegisterPage;

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
