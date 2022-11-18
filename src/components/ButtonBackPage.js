import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import back from "../assets/img/arrow.svg";

function ButtonBackPage() {
  return (
    <Link to={"/mywallet"}>
      <Back src={back} />
    </Link>
  );
}

export default ButtonBackPage;

const Back = styled.img`
  width: 70px;
  height: 30px;
  cursor: pointer;
`;
