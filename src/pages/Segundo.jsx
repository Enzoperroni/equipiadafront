import PrimeiroLink from "../components/link/LinkPrimeiro";
import NewsFeed from "../components/feed/feed";
import { Rodapé } from "../components/post-teste/poststyle";
import { FundoFeed } from "../components/post-teste/poststyle";
import RioDeJaneiroMap from "../components/mapa/mapa";
import SegundoLink from "../components/link/LinkSegundo";
import TerceiroLink from "../components/link/LinkTerceiro";

const Segundo = ()=> {
 return (<div>
 <RioDeJaneiroMap/>
 <SegundoLink/>;
 <TerceiroLink/>;
 </div>
)
};

export default Segundo;