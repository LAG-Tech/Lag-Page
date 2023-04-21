import { Container, LogoContainer, Content} from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/button';
import {Logo} from '../../components/Logo';
import {TextDescription} from '../../components/TextDescription';
import {useMediaQuery} from '../../hooks/use-media-query';
import LogoCircleImg from '../../assets/LogoCircleImg.svg';
import { Link } from 'react-router-dom'

export function Home() {
    
    const IsDesktop = useMediaQuery('(min-width: 480px)');

    return(

        <Container>

            {IsDesktop ? <Header /> : ''}
            <LogoContainer>
                <Logo logo={LogoCircleImg}/>
            </LogoContainer>
            
            <Content>

                <TextDescription 
                    title={"Seja bem-vindo a LAG"}
                    value="Somos um grupo de estudantes de ciências e tecnologia,
                    além de tudo, somos amigos que adoram aprender juntos ficamos felizes com a sua visita,
                    e esperamos que esse um bom espaço para o seu aprendizado" 
                />
                <div className="button">              
                    <Button title="Juntar-se ao time"/>
                    <Button title="Ver mais" />
                </div>

            </Content>

            {IsDesktop ? <Footer /> : ''}
                
        </Container>
    );
}