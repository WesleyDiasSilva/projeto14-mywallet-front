import React from 'react'
import styled from 'styled-components'

function ShortButton({text, icon}) {
  return (
    <Button>
      <Icon src={icon}/>
      <Label>{text}</Label>
    </Button>
  )
}

export default ShortButton

const Button = styled.button`
  background-color: #A328D6;
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
  &:hover{
    background-color: #b235e6;
    transition: .5s;
  }
`

const Icon = styled.img`

`

const Label = styled.span`

`