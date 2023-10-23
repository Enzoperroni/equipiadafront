import React from 'react'
import { PostContainer } from './feedstyle'
import { PostHeader } from './feedstyle'
import { PostImage } from './feedstyle'
import { PostCaption } from './feedstyle'
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