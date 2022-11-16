import React from 'react'
import styled from 'styled-components'

function Input({placeholder}) {
  return <InputModel placeholder={placeholder}/>   
}

export default Input

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
  &::placeholder{
    color: #000;
    font-family: Raleway;
    font-size: 18px;
  }
`