import axios from "axios";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { API } from "../API";
import { UserContext } from "../contexts/UserContext";

function ModalUpdate({ transaction, setModalUpdate }) {
  const [value, setValue] = React.useState(transaction.value);
  const [description, setDescription] = React.useState(transaction.description);

  const { token } = useContext(UserContext).user;
  console.log(token);

  function closeModal() {
    setModalUpdate(false);
  }

  function updateTransaction(id) {
    const promise = axios.put(
      `${API}/transaction/${id}`,
      { value, description, type: transaction.type },
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

  return (
    <ModalContainer>
      <ModalContent>
        <TitleModal>Update of Transaction</TitleModal>
        <ContainerInformationTransaction>
          <Input
            placeholder="Value"
            onChange={({ target }) => setValue(target.value)}
            value={value}
          />
          <Input
            placeholder="Description"
            onChange={({ target }) => setDescription(target.value)}
            value={description}
          />
        </ContainerInformationTransaction>
        <ContainerButtons>
          <Button
            type="update"
            onClick={() => updateTransaction(transaction._id)}
          >
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
  width: 50%;
  height: 40%;
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
  width: 50px;
  height: 50px;
  background-color: #8c11be;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: -25px;
  right: -25px;
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
