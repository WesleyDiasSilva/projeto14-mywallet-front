import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ChangePageLoginRegister({children, to}) {
  return (
    <ChangePage>
      <Link to={to}>{children}</Link>
      
    </ChangePage>
  )
}

export default ChangePageLoginRegister

const ChangePage = styled.span`
  font-family: Raleway;
  font-size: 15;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`