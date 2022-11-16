import React from 'react'
import styled from 'styled-components'
import AppTitle from '../components/AppTitle'
import ChangePageLoginRegister from '../components/ChangePageLoginRegister'
import Input from '../components/Input'
import LongButton from '../components/LongButton'


function LoginPage() {
  return (
    <Background>
     <AppTitle />
      <ContainerInputs>
        <Input placeholder='E-mail'/>
        <Input placeholder='Password'/>
        <LongButton content={'Login'}/>
      </ContainerInputs>
      <ChangePageLoginRegister to={'/sign-up'}>
        First time? Register!
      </ChangePageLoginRegister>
    </Background>
  )
}

export default LoginPage

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