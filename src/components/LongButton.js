import React from 'react'
import styled from 'styled-components'

function LongButton({content, onClick}) {
  return (
    <Button onClick={onClick}>
      {content}
    </Button>
  )
}

export default LongButton

const Button = styled.button`
  background-color: #A328D6;
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 5px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:hover{
    background-color: #b235e6;
    transition: .5s;
  }
`