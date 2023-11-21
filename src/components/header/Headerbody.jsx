import { HeaderContainer, Logo, CompanyTitle} from "./headerstyle";
import Imagemlogo from "./Imagem/Imagemlogo.png"
function Header(){
    return(
        <HeaderContainer>
            <Logo src = {Imagemlogo} alt = 'Logo da passeio carioca'/>
            <CompanyTitle>Passeio Carioca</CompanyTitle>
        </HeaderContainer>
    );
}

export default Header