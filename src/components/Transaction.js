import React from "react";
import styled from "styled-components";

function Transaction({ transaction, setModal, setValueTransactionDelete }) {
  function openModal() {
    setModal(true);
    setValueTransactionDelete(transaction);
  }

  function updateTransaction(){
    
  }

  return (
    <ContainerTransaction>
      <ContainerDateAndDescription>
        <DateTransaction>{transaction.date}</DateTransaction>
        <DescriptionTransaction>
          {transaction.description}
        </DescriptionTransaction>
      </ContainerDateAndDescription>
      <ContainerValueAndRemove>
        <TransactionValue type={transaction.type}>
          {transaction.value}
        </TransactionValue>
        <RemoveTransaction onClick={openModal}>X</RemoveTransaction>
      </ContainerValueAndRemove>
    </ContainerTransaction>
  );
}

export default Transaction;

const RemoveTransaction = styled.span`
  font-family: Raleway;
  font-size: 17px;
  &:hover {
    color: #c70000;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const ContainerValueAndRemove = styled.div`
  display: flex;
  gap: 10px;
`;

const ContainerTransaction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionValue = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: ${(props) => (props.type === "revenue" ? "#03AC00" : "#C70000")};
`;

const ContainerDateAndDescription = styled.div`
  display: flex;
  gap: 15px;
`;

const DateTransaction = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: #9e9e9e;
`;

const DescriptionTransaction = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: #000;
`;
