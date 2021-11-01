import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/GithubProfileContext";
import { Container, RepoItem, RepoList, SelectRepo, SelectRepoButton } from "./styles";

export function Repositories() {

    const { findRepos, profile, findStared } = useContext(userContext);
    const [repos, setRepos] = useState([]);

    async function handleRepos() {
        const updatedRepos = await findRepos(profile.login);
        setRepos(updatedRepos);
    }

    async function handleStared() {
        const updatedRepos = await findStared(profile.login);
        setRepos(updatedRepos);  
    }

    useEffect(() => {
        handleRepos();
    }, [profile]);

    return (
        <Container>
            <SelectRepo>
                <SelectRepoButton onClick={handleRepos}>Repositórios</SelectRepoButton>
                <SelectRepoButton onClick={handleStared}>Stared</SelectRepoButton>
            </SelectRepo>
            <RepoList>
                {
                    repos && repos.map(repo => {
                        return (
                            <RepoItem key={repo.id}>
                                <h4>{repo.name}</h4>
                                <a href={repo.url}>Acesse o projeto aqui</a>
                            </RepoItem>
                        )
                    })
                }
            </RepoList>
        </Container>
    )
}