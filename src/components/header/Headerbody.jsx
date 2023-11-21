import { HeaderContainer, Logo, CompanyTitle} from "./headerstyle";
import Logoriocasas from "./Imagem/Logoriocasas.png"
function Header(){
    return(
        <HeaderContainer>
            <Logo src = {Logoriocasas} alt = 'Logo da passeio carioca'/>
            <CompanyTitle>Passeio Carioca</CompanyTitle>
        </HeaderContainer>
    );
}

export default Header