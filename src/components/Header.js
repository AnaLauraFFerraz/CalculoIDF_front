import { Link } from "react-router-dom";
import { HeaderContainer } from "../style/styles";

export default function Header() {

    return (
        <HeaderContainer>
            <h1>Cálculo da IDF de dados de pluviômetros</h1>
            <Link to="/sobre">Sobre</Link>
        </HeaderContainer>
    )
}
