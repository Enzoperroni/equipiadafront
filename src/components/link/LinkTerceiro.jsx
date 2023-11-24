import { LinkImage,ImageLinkContainer } from "./link";
import Logo from "./Imagem/cristo.png"

const TerceiroLink = () =>{
    return (
        <ImageLinkContainer href="#/terceiro">
          <LinkImage src={Logo} alt="Image Description" />
          
        </ImageLinkContainer>
      );
};

export default TerceiroLink