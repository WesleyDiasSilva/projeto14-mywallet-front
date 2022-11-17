import React from 'react'
import styled from 'styled-components'

function Transaction({transaction}) {
  return (
    <ContainerTransaction>
      <ContainerDateAndDescription>
        <DateTransaction>{transaction.date}</DateTransaction>
        <DescriptionTransaction>{transaction.description}</DescriptionTransaction>
      </ContainerDateAndDescription>
      <TransactionValue type={transaction.type}>
        {transaction.value}
      </TransactionValue>
    </ContainerTransaction>
  )
}

export default Transaction


const ContainerTransaction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
` 

const TransactionValue = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: ${props => props.type === "revenue" ? '#03AC00' : "#C70000"};
`

const ContainerDateAndDescription = styled.div`
  display: flex;
  gap: 15px;
`

const DateTransaction = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: #9E9E9E;
`

const DescriptionTransaction = styled.span`
  font-family: Raleway;
  font-size: 16px;
  color: #000;
`