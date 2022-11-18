import React from "react";
import styled from "styled-components";
import AppTitle from "../components/AppTitle";
import GetStarted from "../components/GetStarted";
import ShortButton from "../components/ShortButton";

function HomePage() {
  return (
    <Background>
      <SignInButton>Sign-In</SignInButton>

      <AppTitle />
      <DescriptionApp>
        My wallet is an app for to manage your finance, register revenues and
        expenses, and also you can have a balance for you to analyze!
      </DescriptionApp>
      <ContainerButtons>
        <GetStarted />
      </ContainerButtons>
    </Background>
  );
}

export default HomePage;

const Background = styled.div`
  background-color: #8c11be;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  position: relative;
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
`;
