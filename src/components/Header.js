import { Link } from "react-router-dom";
import { HeaderContainer } from "../style/general.styles";

export default function Header() {

    return (
        <HeaderContainer>
            <h1>Determinação da equação IDF a partir de dados de pluviômetro</h1>
            <Link to="/sobre">Sobre</Link>
        </HeaderContainer>
    )
}
