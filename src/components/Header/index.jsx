import { useContext, useRef } from "react";
import { userContext } from "../../contexts/GithubProfileContext";
import { Container, Input, Search } from "./styles";

export function Header() {

    const { findProfile, setProfile } = useContext(userContext);
    const inputRef = useRef();

    async function handleClick() {
        const profile = await findProfile(inputRef.current.value)

        setProfile(profile);
    }

    return (
        <Container>
            <Input type="text" ref={inputRef} />
            <Search onClick={handleClick}>Procurar</Search>
        </Container>
    );
}
