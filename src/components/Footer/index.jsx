import { Container,Options } from "./style";
import { Link } from 'react-router-dom'

export function Footer(){

    return(

        <Container>
            <div>
                <span>© Copyright by Going-To Internet</span>
            </div>
            
            <Options>
                <Link to="/"> Sobre</Link>
                <Link to="/"> Contato </Link>
                <Link to="/"> Termos </Link>
            </Options>

        </Container>
    )
}