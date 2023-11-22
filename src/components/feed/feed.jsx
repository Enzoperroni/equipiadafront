import Header from "../header/Headerbody";
import Post from "../post-teste/post";
import { Containerpost } from "../post-teste/poststyle";
import { FundoFeed } from "../post-teste/poststyle";

function NewsFeed(){
    return(
    <div className="Feed">
      <Header/>
      <Containerpost>
      <Post
      
        username="Edifício Lagoa"
        imageSrc="https://live.staticflickr.com/7716/27293785686_5e796fa811_b.jpg"
        endereco="Rua Visconde Ouro Preto"
        caption="A lagoa é mágica, no Rio de Janeiro de tantas mágicas.
        Um pedaço de água doce entre as ondas do mar e as ondulações das montanhas que o cercam.
        São as ondulações dos terraços do Epitácio 1000.
        Ondulações que convivem bem com o desenho da lagoa e permitem arranjos criativos nos terraços, prolongamentos da sala e dos quartos."  
                                      
      />
      <Post
        username="Edifício Joseph Gire"
        imageSrc="https://imagens.ebc.com.br/5ViwG74silxlB15UO9FzlZjHeGQ=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/973664-rj31082015-_dsc4038.jpg?itok=KFIZ9yZx"
        endereco= "Endereço"
        caption="Nos áureos tempos do rádio, o prédio abrigou a partir de 1936 a Rádio Nacional do Rio de Janeiro, que ocupava os 4 últimos andares do edifício. Pelos corredores dos quatro andares ocupados pela emissora, passaram grandes artistas da cultura popular brasileira, como Emilinha Borba, Marlene, Dalva de Oliveira, Luiz Gonzaga, Cauby Peixoto, Elizeth Cardoso. Entre tantos outros."
      />
      <Post
        username="Hilton Copacabana"
        imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/80/98/89/exterior.jpg?w=700&h=-1&s=1"
        endereco="Endereço"
        caption="Localizado no ponto mais alto da orla de Copacabana, o Hilton oferece uma hospedagem inesquecível para você curtir com todo conforto a localização privilegiada das belezas que o Rio de Janeiro tem. Conheça!"
      />
      <Post
        username="Teatro Municipal"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3f/Teatro_Municipal_-_panoramio_%284%29.jpg"
        endereco="Endereço"
        caption="Inaugurado em 14 de julho de 1909[2] durante a prefeitura de Souza Aguiar,[3] mas tendo a obra sido iniciada no governo anterior (de Pereira Passos), como parte do conjunto arquitetônico das obras de reurbanização do Rio de Janeiro e abertura da Avenida Central, exerce desde sua inauguração um importante papel para a cultura carioca e nacional, recebendo em seu palco importantes artistas, orquestras e companhias de ballet."
      />
      <Post
        username="Museu do Amanhã"
        imageSrc="https://st3.idealista.pt/news/arquivos/styles/fullwidth_xl/public/2019-02/museo_del_futuro.jpg?VersionId=PgHRyAXdvs2T_J19qL1SBtaU1IWVIE62&itok=JldK14IZ"
        endereco="Endereço"
        caption="O Museu do Amanhã é um museu construído no município do Rio de Janeiro, no Brasil. O prédio, projeto do arquiteto espanhol Santiago Calatrava, foi erguido ao lado da Praça Mauá, na zona portuária. Sua construção teve o apoio da Fundação Roberto Marinho e teve o custo total de cerca de 230 milhões de reais."
      />
      <Post
        username="Edifício Rio Branco 1"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/e1/Edif%C3%ADcio_RB1.jpg"
        endereco="Endereço"
        caption="O Edifício Rio Branco 1 (RB1), também conhecido como Centro Empresarial Internacional Rio, é um edifício situado no bairro do Centro, na Zona Central da cidade do Rio de Janeiro. Localiza-se em uma das extremidades da Avenida Rio Branco, em frente à Praça Mauá. O RB1 é um moderno e sofisticado centro empresarial que abriga escritórios de diversas empresas. É um referencial arquitetônico de economia e de espaço."
      />
      <Post
        username="Edifício Urca"
        imageSrc="https://lulacerda.ig.com.br/wp-content/uploads/2023/05/FB_IMG_1683047382069.jpg"
        endereco="Endereço"
        caption="Entre a Praia da Urca e o Morro do Pão de Açúcar, na Avenida Portugal, n° 986, foi inaugurado, em 1934, o Edifício Urca, praticamente o primeiro grande prédio do bairro no estilo art déco. Essa construção guarda alguns tesouros arquitetônicos.

        "
      />
      <Post
        username="Arquivo Nacional"
        imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9b/51/c6/arquivo-nacional.jpg?w=500&h=-1&s=1"
        endereco="Endereço"
        caption="O Arquivo Nacional é um órgão público brasileiro. Subordinado ao Ministério da Gestão e da Inovação em Serviços Públicos, é responsável pela gestão, preservação e difusão de documentos da administração pública federal."
      />
      <Post
        username="Edifício Avenida Atlântica"
        imageSrc="https://photos.wikimapia.org/p/00/06/64/84/45_big.jpg"
        endereco="Endereço"
        caption="A Avenida Atlântica é conhecida por suas belas vistas para o Oceano Atlântico e por ser um local turístico popular. Ao longo dessa avenida, pode haver vários edifícios residenciais e comerciais com vista para a praia de Copacabana. "
      />
      <Post
        username="Torre Rio Sul"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/17/Torre_RioSul_02.jpg"
        endereco="Endereço"
        caption="O Rio Sul Center (também conhecido como Torre do Rio Sul) é um arranha-céu de 48 andares de 164 m (538.058 ft) de altura, localizado em Botafogo no Rio de Janeiro, Rio de Janeiro. Atualmente é o edifício mais alto do estado do Rio e é o 16º maior edifício do Brasil. Quando foi inaugurado era o 3º maior, superado pelo Mirante do Vale e pelo Edifício Itália, ambos em São Paulo.[1] Foi projetado pelos arquitetos Ulysses Burlamaqui e Alexandre Chan. "
      />
      </Containerpost>
      
      {/* Adicione mais posts conforme necessário */}
    </div>
    );
}
export default NewsFeed;