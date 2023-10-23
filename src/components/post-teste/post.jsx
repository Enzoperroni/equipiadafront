import React from 'react'
import { PostContainer } from './poststyle'
import { PostHeader } from './poststyle'
import { PostImage } from './poststyle'
import { PostCaption } from './poststyle'
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