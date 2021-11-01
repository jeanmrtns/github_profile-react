import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const UserPhoto = styled.img`
    border-radius: 33rem;
    max-width: 110px;
    margin-right: 1rem;
`;

export const UserInfo = styled.div`
    p {
        color: #171923;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.25rem;

        span, span > a {
            color: #2D3748;
            font-weight: normal;
            text-decoration: none;
        }

        span > a {
            color: #3182CE;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const GithubInformations = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
`;