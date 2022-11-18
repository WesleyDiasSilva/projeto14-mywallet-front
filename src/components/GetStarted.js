import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function GetStarted() {
  const navigate = useNavigate();
  function redirectSignUp() {
    navigate("/sign-up");
  }

  return <Button onClick={redirectSignUp}>GET STARTED</Button>;
}

export default GetStarted;

const Button = styled.button`
  width: 210px;
  height: 70px;
  border: none;
  border-radius: 5px;
  background-color: #a328d6;
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
