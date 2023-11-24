import { PostCaption, PostContainer, PostEndereco, PostHeader, PostImage } from "./membros";

function Membros({ username, imageSrc, caption }) {
    return (
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

  export default Membros