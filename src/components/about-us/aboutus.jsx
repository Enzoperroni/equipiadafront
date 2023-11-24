import Membros from "../membros/members"
import minhalinkedin from "./fotos/minhalinkedin.jpg"
import douglas from "./fotos/douglas.jpg"
import mateuspc from "./fotos/mateuspc.jpg"
import joaopmenezes from "./fotos/joaopmenezes.png"
import mendes from "./fotos/mendes.png"

function Sobrenos() {
    return (
      <div className="news-feed">
        <Membros
          username="Enzo Menezes Perroni"
          imageSrc= {minhalinkedin}
          caption="Curso: Engenharia de Software. A parte que eu mais me interessei pelo projeto foi aprender e trabalhar com o react (principalmente na montagem do feed e estilização), gostei muito da funcionalidade do framework e do desafio de aprender uma linguagem nova."
        />
        <Membros
          username="Douglas Arthur Almeida Hancock"
          imageSrc={douglas}
          caption="Curso: Ciência de Dados e IA. Gostei mais sobre a parte de montar o feed e suas funções"
        />
        <Membros
          username="Mateus Padilha"
          imageSrc={mateuspc}
          caption="Curso: Ciência de Dados e IA. Estou satisfeito com o nosso trabalho, gostei de estilizar os elementos do feed e entender mais como funcionava a geolocalização com base na documentação do Leaflet."
        />
        <Membros
          username="João Pedro Menezes"
          imageSrc={joaopmenezes}
          caption="Curso: Ciência de Dados e IA. A parte que eu achei mais interessante foi na hora de fazer o mapa com geolocalização . Foi algo desafiador porem interessante de se trabalhar."
        />
        <Membros
          username="Gabriel Mendes"
          imageSrc={mendes}
          caption="Curso: Ciência de Dados e IA. Dentre as etapas do trabalho a que mais me encantou foi a visualização do feed já com os pontos de geolocalização fazendo referência aos monumentos no mapa. Acho que a equipe trabalhou bem em conjunto dividindo as tarefas, minha parte foi na criação do 5W2H para os 3 agentes passando pelo entendimento do projeto até os casos de uso, bem como também um pouco nos slides e no react."
        />
        
      </div>
    );
    }

export default Sobrenos