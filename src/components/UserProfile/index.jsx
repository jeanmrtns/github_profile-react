import { Container, UserPhoto, UserInfo, GithubInformations } from "./styles";

export function UserProfile() {
    return (
        <Container>
            <UserPhoto src="https://github.com/jeanmrtns.png" alt="Jean Martins" />
            <UserInfo>
                <p>Nome: <span>Jean Martins</span></p>
                <p>Idade: <span>22 anos</span></p>
                <p>Blog: <span><a href="https://blog-jean.vercel.app/">https://blog-jean.vercel.app/</a></span></p>
                <GithubInformations>
                    <p>Repositórios: <span>51</span></p>
                    <p>Stared: <span>2</span></p>
                </GithubInformations>
            </UserInfo>
        </Container>
    );
}