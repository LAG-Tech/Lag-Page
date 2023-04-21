import { Container } from "./styles";

export function TextDescription ( {title, value, ...rest} ){

    return(
        <Container {...rest}>
             <h2>{title}</h2>
            {value}
        </Container>
    );
}