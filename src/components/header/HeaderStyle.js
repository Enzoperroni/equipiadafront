import { styled } from "styled-components"

const HeaderContainer = styled.header`
    background-color: green;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin: auto;
`
const Logo = styled.img`
    width: 100px;
    height: auto;
`
const CompanyTitle = styled.h1`
    font-family: monospace;  
    font-size: 27px;
    margin-top: 10px;
`

export {HeaderContainer, Logo, CompanyTitle}