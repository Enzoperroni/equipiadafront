import  styled  from "styled-components";
import Backgroundrio from "./Backgroundimage/Backgroundrio.jpg"
const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 384px;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background: #fff;
  border: 1px solid #e1e1e1;  
  margin: auto;
  border-radius:10px;
  margin-bottom:20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;
const BotaoExperiencia =styled.button`
color: darkblue;
width:100%

`;
const PostImage = styled.img`
  width: 100%;
  max-height: 200px;
  min-height: 200px;
  object-fit: cover;
  
`;

const PostCaption = styled.div`
  position: relative;
  
  padding: 10px;
  span {
    font-size: 0.9rem;
  }
`;
const PostEndereco = styled.div`
  margin-left:2px;
  font-size:10px;

`;
const Botao = styled.button`
  
  
  position:relative;
  width:100%;
  cursor: pointer;
  

`;
const Containerpost = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
const FundoFeed = styled.div`
  background-image: url(${Backgroundrio});
  background-Size: cover;
  background-Position: center;
  background-Repeat: no-repeat;
  background-Attachment: fixed;
  
  
`

const Rodapé = styled.footer`
  margin-top: 22em;
  bottom: 10em;
  
  
  
  
`;
export {Feed,PostCaption,PostContainer,PostHeader,PostImage,Botao,PostEndereco,Containerpost,Rodapé, FundoFeed,BotaoExperiencia}