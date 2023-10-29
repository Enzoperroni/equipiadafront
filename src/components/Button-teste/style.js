import styled from "styled-components";

const EstilodoBotao = styled.button`
  background-image:url(https://pixel.cuboup.com/wp-content/uploads/edd/2021/10/Estrela.jpg);
  background-size: cover;
  margin:auto
  margin-top:10px;
  margin-left:1090px;
  padding:10px;
  border-radius:5px 5px 5px 5px;
  border:2px solid yellow;
  cursor:pointer;

 

  &:active {
    transform: scale(0.85); 
  }
  
`;


export { EstilodoBotao };