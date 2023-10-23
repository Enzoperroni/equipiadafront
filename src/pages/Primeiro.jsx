import LinkGenerico from "../components/Link Genérico/LinkGenérico";
import NewsFeed from "../components/feed/feed";

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
    <div>
        <NewsFeed/>
    </div>);
};

export default Primeiro;