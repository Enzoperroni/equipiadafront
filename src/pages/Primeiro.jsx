import LinkGenerico from "../components/Link Genérico/LinkGenérico";
import PrimeiroLink from "../components/link/LinkPrimeiro";
import RioDeJaneiroMap from "../components/mapa/mapa";
import NewsFeed from "../components/feed/feed";
import { Rodapé } from "../components/post-teste/poststyle";
import { FundoFeed } from "../components/post-teste/poststyle";

import SegundoLink from "../components/link/LinkSegundo";

const Primeiro = ()=> {
    const dados = [
        [ "https://www.ibmec.br/", "ibmec" ],
        [ "https://estude.ibmec.br/ibmec-hubs","ibmec-hubs"],
        [ "https://botafogo.com.br/", "botafogo"],
        [ "https://github.com/", "github"],
        [ "https://foundation.mozilla.org/pt-BR/", "mozilla"],

    ];

    const links = dados.map( (ele,i) => 
    (<LinkGenerico
        key = {i}
        texto = {(ele[1])}
        endereco = {(ele[0])} 
        />
    ));

    
 return (
    <FundoFeed>
        <NewsFeed/>
        <Rodapé><PrimeiroLink/></Rodapé>
    </FundoFeed>)
    ;
};

export default Primeiro;