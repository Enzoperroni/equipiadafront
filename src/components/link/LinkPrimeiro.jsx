import React from "react";
import { LinkImage,ImageLinkContainer } from "./link";
import Logo from "./Imagem/cristo.png"
const PrimeiroLink = () => {
  return (
    <ImageLinkContainer href="/">
      <LinkImage src={Logo} alt="Image Description" />
      
    </ImageLinkContainer>
  );
};

export default PrimeiroLink;