import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e293b;
  min-height: 100vh;
`

export const Header =styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #f0bb03;
`

export const Description=styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
`

export const Button = styled.button`
   background-color: #ffffff;
   font-size: 15px;
   font-weight: bold;
   font-family: 'Roboto';
   border-radius: 10px;
   padding: 10px;
   cursor: pointer;
`