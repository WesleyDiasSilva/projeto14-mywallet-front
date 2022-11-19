import axios from "axios";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { API } from "../API";
import { UserContext } from "../contexts/UserContext";

function ModalUpdate({
  transaction,
  setModalUpdate,
  type,
  setTypeUpdate,
  user,
}) {
  const [inputValue1, setInputValue1] = React.useState(
    type === "user" ? user.name : transaction.value
  );
  const [inputValue2, setInputValue2] = React.useState(
    type === "user" ? user.image : transaction.description
  );

  const userContext = useContext(UserContext);
  const { token } = userContext.user;
  function closeModal() {
    setModalUpdate(false);
    setTypeUpdate("");
  }

  function updateTransaction(id) {
    const promise = axios.put(
      `${API}/transaction/${id}`,
      { value: inputValue1, description: inputValue2, type: transaction.type },
      { headers: { authorization: token } }
    );

    promise.then((res) => {
      closeModal();
      console.log(res);
    });
    promise.catch((err) => {
      closeModal();
      console.log(err);
    });
  }

  function updateUser() {
    const promise = axios.put(
      `${API}/user`,
      { name: inputValue1, image: inputValue2 },
      { headers: { authorization: token } }
    );
    promise.then(() => {
      const user = JSON.parse(localStorage.getItem("token"));
      user.name = inputValue1;
      user.image = inputValue2;
      localStorage.setItem("token", JSON.stringify(user));
      closeModal();
    });
    promise.catch(() => {
      closeModal();
    });
  }

  function decideUpdate(transaction) {
    if (type === "user") {
      updateUser();
    } else {
      updateTransaction(transaction._id);
    }
  }

  return (
    <ModalContainer>
      <ModalContent>
        <TitleModal>
          {type === "user" ? "Profile Information" : "Update of Transaction"}
        </TitleModal>
        <ContainerInformationTransaction>
          <Input
            placeholder={type === "user" ? "Name" : "Value"}
            onChange={({ target }) => setInputValue1(target.value)}
            value={inputValue1}
          />
          <Input
            placeholder={type === "user" ? "Image" : "Description"}
            onChange={({ target }) => setInputValue2(target.value)}
            value={inputValue2}
          />
        </ContainerInformationTransaction>
        <ContainerButtons>
          <Button type="update" onClick={() => decideUpdate(transaction)}>
            Update
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ContainerButtons>
        <CloseModal onClick={closeModal}>X</CloseModal>
      </ModalContent>
    </ModalContainer>
  );
}

export default ModalUpdate;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 15px;
  border: none;
  background-color: #d1d1d1;
  color: #000;
  font-family: Raleway;
  font-size: 15px;
  &::placeholder {
    color: #000;
    font-family: Raleway;
    font-size: 18px;
  }
`;

const AnimaEntry = keyframes`

0%{
  right: 500px;
  transform: initial;
  opacity: 0;
}

10%{
  right: 0px;
  transform: initial;
  opacity: 1;
}
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 60%;
  height: 50%;
  border-radius: 5px;
  z-index: 2;
  opacity: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: ${AnimaEntry} 5s backwards;
`;

const TitleModal = styled.h3`
  font-family: Raleway;
  font-size: 20px;
  font-weight: bold;
`;

const ContainerInformationTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 70%;
  justify-content: center;
`;

const Button = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "update" ? "#03AC00" : "#e7e6e8"};
  color: ${(props) => (props.type === "update" ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 14px;
  font-family: Raleway;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type === "update" ? "#1deb1a" : "#d4cfcf"};
    transition: 0.3s;
  }
`;

const CloseModal = styled.button`
  width: 35px;
  height: 35px;
  background-color: #8c11be;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: -15px;
  right: -15px;
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ab2cde;
    transition: 0.3s;
  }
`;
