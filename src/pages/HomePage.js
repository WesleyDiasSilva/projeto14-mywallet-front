import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppTitle from "../components/AppTitle";
import GetStarted from "../components/GetStarted";

function HomePage() {
  const navigate = useNavigate();
  function redirectSignIn() {
    navigate("/sign-in");
  }
  return (
    <Background>
      <SignInButton onClick={redirectSignIn}>Sign-In</SignInButton>
      <ContainerHome>
        <AppTitle />
        <DescriptionApp>
          My wallet is an app for to manage your finance, register revenues and
          expenses, and also you can have a balance for you to analyze!
        </DescriptionApp>
        <ContainerButtons>
          <GetStarted />
        </ContainerButtons>
      </ContainerHome>
    </Background>
  );
}

export default HomePage;

const Background = styled.div`
  background-color: #8c11be;
  width: 100%;
  height: 100vh;
  gap: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const SignInButton = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  width: 180px;
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-family: Raleway;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #b235e6;
    transition: 0.5s;
  }
`;

const DescriptionApp = styled.span`
  font-family: Raleway;
  font-size: 20px;
  width: 50%;
  color: #fff;
  font-weight: bold;
  line-height: 1.25;
  margin-top: 20px;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;
