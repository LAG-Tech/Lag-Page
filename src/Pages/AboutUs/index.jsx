import { Container, LogoContainer, Content} from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/button';
import {Logo} from '../../components/Logo';
import {TextDescription} from '../../components/TextDescription';
import {useMediaQuery} from '../../hooks/use-media-query';
import ImageAbout from '../../assets/ImageAbout.svg';
import { Link } from 'react-router-dom'

export function AboutUs() {
    
    const IsDesktop = useMediaQuery('(min-width: 480px)');

    return(

        <Container>

            {IsDesktop ? <Header /> : ''}
            <LogoContainer>
                <Logo logo={ImageAbout}/>
            </LogoContainer>
            
            <Content>

                <TextDescription 
                    title={"Sobre nós"}
                    value="Como já dissemos no inicio, somos um grupo de estudantes de ciências e tecnologia,
                        amigos de faculdade, de cursos técnicos, conhecidos e entre outros apaixonados por obter
                        conhecimento. Criamos um servidor no Discord onde podemos estudar, aprender e crescermos
                        juntos, tanto compartilhando conteúdos novos, ajudando quem acabou de entrar nesse novo
                        mundo de aventuras entre linhas de código, como aqueles que talvez prefiram o lado mais
                        artístico, nos conteúdos de design, ou até mesmo você que quer aprender um pouco mais 
                        de gestão financeira. Ficamos felizes com a sua visita, e esperamos que esse um bom 
                        espaço para o seu aprendizado" 
                />
                <div className="button">              
                    <Button title="Juntar-se ao time"/>
                </div>

            </Content>

            {IsDesktop ? <Footer /> : ''}
                
        </Container>
    );
}