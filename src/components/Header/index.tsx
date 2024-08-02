import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
}

export default Header;
