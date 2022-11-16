import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import AppTitle from '../components/AppTitle'
import LongButton from '../components/LongButton'
import ChangePageLoginRegister from '../components/ChangePageLoginRegister'


function RegisterPage() {
  return (
    <Background>
      <AppTitle />
      <ContainerInputs>
        <Input placeholder='Name'/>
        <Input placeholder='E-mail'/>
        <Input placeholder='Password'/>
        <Input placeholder='Confirm Password'/>
        <LongButton content={'Register'}/>
      </ContainerInputs>
      <ChangePageLoginRegister>
        Do you have a account? Get in now!
      </ChangePageLoginRegister>
    </Background>
  )
}

export default RegisterPage

const Background = styled.div`
  background-color: #8C11BE;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

const ContainerInputs = styled.div`
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`



