import React from "react";
import styled from "styled-components";

// Define a styled container for the link
const ImageLinkContainer = styled.a`
  
  flex-direction: column;
  width:50px;
  height:40px;
  align-items:center;
  text-decoration: none;
  
  `;

// Define a styled image
const LinkImage = styled.img`
  
  width: 50px;
  height: 40px;
  margin-top: 20px;
  display: block; 
  margin-left: auto; 
  margin-right: auto;
  
  
 
 
`;
 
// Define styled text or content


export {ImageLinkContainer,LinkImage};