import { Container } from "./styles";

export function Logo ({logo, ...rest}){

    return (

        <Container>
              
            <img src= {logo} alt="Logo" />

        </Container>
    );
}