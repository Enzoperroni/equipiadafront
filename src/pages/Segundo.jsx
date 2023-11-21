import PrimeiroLink from "../components/link/LinkPrimeiro";
import NewsFeed from "../components/feed/feed";
import { Rodapé } from "../components/post-teste/poststyle";
import { FundoFeed } from "../components/post-teste/poststyle";

const Segundo = ()=> {
 return (<FundoFeed>
    <NewsFeed/>
    <Rodapé><PrimeiroLink/></Rodapé>
    </FundoFeed>);
};

export default Segundo;