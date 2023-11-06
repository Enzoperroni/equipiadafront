import PrimeiroLink from "../components/link/LinkPrimeiro";
import NewsFeed from "../components/feed/feed";
import { Rodapé } from "../components/post-teste/poststyle";

const Segundo = ()=> {
 return (<div>
    <NewsFeed/>
    <Rodapé><PrimeiroLink/></Rodapé>
    </div>);
};

export default Segundo;