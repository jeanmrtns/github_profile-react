import { Container } from "./styles";

export function Layout({children}) {
    return (
        <Container>
            { children }
        </Container>
    );
}