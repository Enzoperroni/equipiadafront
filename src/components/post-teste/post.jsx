import React from 'react'
import { PostContainer } from './Poststyle'
import { PostHeader } from './Poststyle'
import { PostImage } from './Poststyle'
import { PostCaption } from './Poststyle'
function Post({
    username, imageSrc, caption
}){
    return(
    <PostContainer>
      <PostHeader>
        <span>{username}</span>
      </PostHeader>
      <PostImage src={imageSrc} alt="Post" />
      <PostCaption>
        <span>{caption}</span>
      </PostCaption>
    </PostContainer>
    );
}
export default Post;