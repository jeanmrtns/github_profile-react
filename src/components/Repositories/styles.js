import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const SelectRepo = styled.div``;

export const SelectRepoButton = styled.button`
    background-color: orange;
    max-width: 10rem;
    margin-right: 1rem;
    color: #ffffff;
`;

export const RepoList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const RepoItem = styled.li`
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 0.25rem;
    width: 15rem;
    margin: 1rem 1rem 0 0;

    a {
        display: block;
        margin-top: 0.25rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
