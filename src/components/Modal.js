import React from "react";
import styled from "styled-components";

function Modal({ valueTransactionDelete, setModal }) {
  function closeModal() {
    setModal(false);
  }

  return (
    <ContainerModal onClick={closeModal}>
      <BoxModal>
        <TitleModal>Do you want to remove this transaction?</TitleModal>
        <Warning>This action no turning back </Warning>
        <InformationTransaction>
          <TransactionDescription>
            {valueTransactionDelete.description} :{" "}
            {valueTransactionDelete.value}
          </TransactionDescription>
          <TransactionDescription>
            Date : {valueTransactionDelete.date}
          </TransactionDescription>
        </InformationTransaction>
        <ContainerButtons>
          <Button color="#f72500">Delete</Button>
          <Button>Cancel</Button>
        </ContainerButtons>
      </BoxModal>
    </ContainerModal>
  );
}

export default Modal;

const ContainerModal = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100%;
  opacity: 0.5;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
`;

const BoxModal = styled.div`
  height: 50%;
  width: 50%;
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const TitleModal = styled.h3`
  font-family: Raleway;
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

const Warning = styled.span`
  font-family: Raleway;
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

const InformationTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const TransactionDescription = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 25%;
  height: 100%;
  background-color: ${(props) => (props.color ? props.color : "#DDD")};
  border: none;
  border-radius: 5px;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 40px;
  width: 100%;
`;
