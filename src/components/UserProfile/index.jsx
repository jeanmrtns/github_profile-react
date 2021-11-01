import { useContext } from "react";
import { userContext } from '../../contexts/GithubProfileContext'
import { Container, UserPhoto, UserInfo, GithubInformations } from "./styles";

export function UserProfile() {

    const { profile } = useContext(userContext);

    return (
        <Container>
            <UserPhoto src={profile.avatar_url} alt={profile.name} />
            <UserInfo>
                <p>Nome: <span>{profile.name}</span></p>
                <p>Sobre: <span>{profile.bio}</span></p>
                <p>Blog: <span><a href={profile.blog}>{profile.blog}</a></span></p>
                <GithubInformations>
                    <p>Repositórios: <span>{profile.public_repos}</span></p>
                    <p>Stared: <span>{profile.public_gists}</span></p>
                </GithubInformations>
            </UserInfo>
        </Container>
    );
}