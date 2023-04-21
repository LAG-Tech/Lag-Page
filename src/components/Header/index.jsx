import { RiShutDownLine } from 'react-icons/ri'
import { Container,LogoStyled,Options } from "./style";
import {Logo} from '../../components/Logo';
import LogoHeader from '../../assets/LogoHeader.svg';
import { Link } from 'react-router-dom'

export function Header(){

    return(

        <Container>
            <LogoStyled >
                <Link to="/"> <Logo logo={LogoHeader}/> </Link>
            </LogoStyled>
            
            <Options>
                <Link  to="/"> Inicio </Link>
                <Link to="/AboutUs"> Sobre</Link>
                <Link to="/"> Time </Link>
                <Link to="/"> Contato </Link>
            </Options>

        </Container>
    )
}