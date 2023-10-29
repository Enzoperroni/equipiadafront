import Post from "../post-teste/post";
import MyButton from "../Button-teste/Button";
function NewsFeed(){
    return(
    <div className='Feed'>

        <Post
          username="Nome do prédio"
          imageSrc="https://live.staticflickr.com/7716/27293785686_5e796fa811_b.jpg"
          caption="Si vis pacem, para belum" />
        <Post
          username="Nome do prédio 2"
          imageSrc="https://imagens.ebc.com.br/5ViwG74silxlB15UO9FzlZjHeGQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/973664-rj31082015-_dsc4038.jpg?itok=KFIZ9yZx"
          caption="Si vis pacem, para belum" />
        <Post
          username="Nome do prédio 3"
          imageSrc="https://imagens.ebc.com.br/5ViwG74silxlB15UO9FzlZjHeGQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/973664-rj31082015-_dsc4038.jpg?itok=KFIZ9yZx"
          caption="Si vis pacem, para belum" />
          
        <MyButton/>
           
        {/* Adicione mais posts conforme necessário */}
      </div>
      
    );
}
export default NewsFeed;
