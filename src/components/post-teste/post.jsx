import React from 'react'
function Post({
    username, imageSrc, caption
}){
    return(
        <div className="post">
            <div className="post-header">
                <img src={imageSrc} alt={`$ {username}'s profile`} />
                <span>{username}</span>
            </div>
                <img className="post-image" src={imageSrc} alt="Post" />
            <div className='post-caption'>
                <span>{caption}</span>
            </div>
        </div>
    );
}
export default Post;