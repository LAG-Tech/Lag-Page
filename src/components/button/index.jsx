import { Container } from "./styles";

export function Button( {title, color, ...rest} ){

    return(
        <Container type="button" {...rest}>  
            {title}            
        </Container>
    )

}