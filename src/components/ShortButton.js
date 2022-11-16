import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ShortButton({ text, icon, link }) {
  return (
    <Link to={link}>
      <Button>
        <Icon src={icon} />
        <Label>{text}</Label>
      </Button>
    </Link>
  );
}

export default ShortButton;

const Button = styled.button`
  background-color: #a328d6;
  width: 156px;
  height: 114px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-family: Raleway;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #b235e6;
    transition: 0.5s;
  }
`;

const Icon = styled.img``;

const Label = styled.span``;
