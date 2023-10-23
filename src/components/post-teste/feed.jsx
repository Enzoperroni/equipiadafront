import Post from "./post"
function NewsFeed(){
    return(
        <div className="news-feed">
            <Post
            username="example-user1"
            imageSrc="urldaimagem2.jpg"
            caption="si vis pacem, para belum"
            />
        </div>
    );
}
export default NewsFeed;