import axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { API } from "../API.js";
import { UserContext } from "../contexts/UserContext";

function Modal({ valueTransactionDelete, setModal, setUpdateTransactions, updateTransactions }) {
  const { description, date, value, _id } = valueTransactionDelete;
  function closeModal() {
    setModal(false);
    // setUpdateTransactions(!updateTransactions)
  }

  const userContext = useContext(UserContext)
  const token = userContext.user.token;
  function deleteTransaction(id){
    const promise = axios.delete(`${API}/transaction/${id}`, {headers: {authorization: token}});
    promise.then(() => closeModal());
    promise.catch(err => console.log(err))
  }

  return (
    <ModalContainer>
      <ModalContent>
        <TitleModal>Do you want to delete this transaction?</TitleModal>
        <ContainerInformationTransaction>
          <LabelTransaction>Date: {date}</LabelTransaction>
          <LabelTransaction>Description: {description}</LabelTransaction>
          <LabelTransaction>Value: {value}</LabelTransaction>
        </ContainerInformationTransaction>
        <ContainerButtons>
          <Button onClick={() => deleteTransaction(_id)} type="delete">Delete</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ContainerButtons>
        <CloseModal onClick={closeModal}>X</CloseModal>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  &:hover{
    background-color: #ab2cde;
    transition: 0.3s;
  }
`
