import React, { useState } from 'react';
import { PostContainer, PostHeader, PostImage, PostCaption, Botao,PostEndereco} from './poststyle';
import PostMapa from '../mapa/mapapost';


function Post({ username, imageSrc, caption,endereco }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const maxCharacters = 80;
  const words = caption.split(' ');

  return (
    <PostContainer>
      <PostHeader>
        <span>{username}</span>
      </PostHeader>
      <PostImage src={imageSrc} alt="Post" />
      <PostEndereco><span>{endereco}</span></PostEndereco>
      
      <PostCaption>
        {expanded ? (
          <>
            <span>{caption}</span>
           
            <PostMapa></PostMapa>

            
            <Botao onClick={toggleDescription}>Leia Menos</Botao>
          </>
        ) : (
          <>
            <span>
              {words.length > maxCharacters / 6
                ? words.slice(0, maxCharacters / 6).join(' ') + '...'
                : caption}
            </span>
            {caption.length > maxCharacters && (
              <Botao onClick={toggleDescription}>
                {expanded ? 'Leia Menos' : 'Leia Mais'}
              </Botao>
            )}
          </>
        )}
      
      </PostCaption>
      
    </PostContainer>
  );
};

export default Post;