import axios from "axios";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { API } from "../API.js";
import { UserContext } from "../contexts/UserContext";

function ModalDelete({
  valueTransactionDelete,
  setModal,
  setUpdateTransactions,
  updateTransactions,
}) {
  const { description, date, value, _id } = valueTransactionDelete;
  function closeModal() {
    setModal(false);
  }

  const userContext = useContext(UserContext);
  const token = userContext.user.token;
  function deleteTransaction(id) {
    const promise = axios.delete(`${API}/transaction/${id}`, {
      headers: { authorization: token },
    });
    promise.then(() => closeModal());
    promise.catch((err) => console.log(err));
  }

  return (
    <ModalContainer>
      <ModalContent>
        <ContainerTitle>
          <TitleModal>Delete this transaction?</TitleModal>
        </ContainerTitle>
        <ContainerInformationTransaction>
          <LabelTransaction>Date: {date}</LabelTransaction>
          <LabelTransaction>Description: {description}</LabelTransaction>
          <LabelTransaction>Value: {value}</LabelTransaction>
        </ContainerInformationTransaction>
        <ContainerButtons>
          <Button onClick={() => deleteTransaction(_id)} type="delete">
            Delete
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ContainerButtons>
        <CloseModal onClick={closeModal}>X</CloseModal>
      </ModalContent>
    </ModalContainer>
  );
}

export default ModalDelete;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const TitleModal = styled.span`
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

const LabelTransaction = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-weight: bold;
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
    props.type === "delete" ? "#fc0000" : "#e7e6e8"};
  color: ${(props) => (props.type === "delete" ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 14px;
  font-family: Raleway;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type === "delete" ? "#d11919" : "#d4cfcf"};
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
