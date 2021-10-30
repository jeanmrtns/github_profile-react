import { Container, Input, Search } from "./styles";

export function Header() {
    return (
        <Container>
            <Input type="text" />
            <Search>Procurar</Search>
        </Container>
    );
}
