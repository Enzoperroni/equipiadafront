import { HeaderContainer, Logo, CompanyTitle} from "./headerstyle";
function Header(){
    return(
        <HeaderContainer>
            <Logo src = '' alt = 'Logo da passeio carioca'/>
            <CompanyTitle>Passeio Carioca</CompanyTitle>
        </HeaderContainer>
    );
}

export default Header