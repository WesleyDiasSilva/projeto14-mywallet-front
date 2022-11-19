import React from "react";
import styled from "styled-components";
import eye from "../assets/img/eye.svg";
import eyeOff from "../assets/img/eye-off.svg";

function Input({ placeholder, setValue, value, typeForm = "text" }) {
  const [typeInput, setTypeInput] = React.useState(typeForm);
  function changeInput() {
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  }

  return (
    <ContainerInput>
      <InputModel
        type={typeInput}
        onChange={({ target }) => setValue(target.value)}
        value={value}
        placeholder={placeholder}
      />
      {typeForm === "password" ? (
        <Icon
          onClick={changeInput}
          src={typeInput === "password" ? eye : eyeOff}
        />
      ) : (
        ""
      )}
    </ContainerInput>
  );
}

export default Input;

const ContainerInput = styled.div`
  width: 100%;
  position: relative;
  background-color: red;
`;

const InputModel = styled.input`
  width: 100%;
  height: 58px;
  border-radius: 5px;
  box-sizing: border-box;
  border: none;
  padding-left: 15px;
  color: #000;
  font-family: Raleway;
  font-size: 15px;
  &::placeholder {
    color: #000;
    font-family: Raleway;
    font-size: 18px;
    font-weight: bold;
  }
  &:focus {
    border: red;
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 25px;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;
