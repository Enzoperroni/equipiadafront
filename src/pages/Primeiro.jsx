import LinkGenerico from "../components/LinkGenérico";
import LinkSegundo from "../components/LinkSegundo";

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

    
 return (<div>
    <h1>Mini titulo</h1>
    <p>Meu texto</p>
    {links}
    </div>);
};

export default Primeiro;