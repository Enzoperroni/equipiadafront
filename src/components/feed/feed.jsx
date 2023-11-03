import Header from "../header/Headerbody";
import Post from "../post-teste/post";

function NewsFeed(){
    return(
    <div class = 'Feed'>
      <Header/>
      <Post
        username="Nome do prédio"
        imageSrc="https://live.staticflickr.com/7716/27293785686_5e796fa811_b.jpg"
        endereco="Rua Visconde Ouro Preto"
        caption="A vigésima edição do evento de arquitetura Morar Mais Rio escolheu como sede a espetacular Escola Casa Maternal Mello Mattos, localizada há mais de um século no número 80 da Rua Faro, no Jardim Botânico.

        A residência principal, inaugurada em 1924, estará aberta ao público pela primeira vez entre os dias 19 de outubro e 26 de novembro de 2023. Ela foi erguida dentro do antigo Engenho Del Rey, uma propriedade de 45 mil m2 com uma linda vista para o Cristo Redentor, Lagoa Rodrigo de Freitas e parte da zona sul carioca. Nesse mesmo terreno está a Capela de Nossa Senhora da Cabeça (última foto), a primeira capela construída no Rio de Janeiro entre os anos de 1603 a 1607.
        
        A Casa Maternal Mello Mattos, administrada pelas Irmãs Carmelitas Descalças Servas dos Pobres, funciona há décadas como uma creche-escola para crianças. As salas de aula foram isoladas na construção atrás do casarão principal até o final do evento que irá devolver o imóvel pintado e restaurado. O tema do Morar Mais Rio 2023 é a “Tiny House”, com um conceito de casas pequenas e sustentáveis. São 40 ambientes e 53 profissionais envolvidos."
               
               
      />
      
      <Post
        username="Nome do prédio 2"
        imageSrc="https://imagens.ebc.com.br/5ViwG74silxlB15UO9FzlZjHeGQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/973664-rj31082015-_dsc4038.jpg?itok=KFIZ9yZx"
        caption="Si vis pacem, para belum Si vis pacem, para belum Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belumSi vis pacem, para belum Si vis pacem, para belum"
      />
      <Post
        username="Nome do prédio 2"
        imageSrc="https://ogimg.infoglobo.com.br/in/25005686-db4-e39/FT1086A/760/BotafogoEmpresas.jpg"
        caption="Si vis pacem, para belum Si vis pacem, para belum Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belum
        Si vis pacem, para belum Si vis pacem, para belumSi vis pacem, para belum Si vis pacem, para belum"
      />
      
      {/* Adicione mais posts conforme necessário */}
    </div>
    );
}
export default NewsFeed;