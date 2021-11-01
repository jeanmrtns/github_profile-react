import { createContext, useState } from "react";
import { api } from "../services/api";

export const userContext = createContext({});

export function UserProvider({ children }) {

    const [profile, setProfile] = useState({});

    async function findProfile(username) {
        try {
            const response = await api.get(`/${username}`);
            const user = response.data;
            return user;
        } catch(error) {
            throw new Error(error);
        }
    }

    async function findRepos(username) {
        try {
            const response = await api.get(`/${username}/repos`);
            const repos = response.data;

            return repos;
        } catch(error) {
            throw new Error(error);
        }
    }

    async function findStared(username) {
        try {
            const response = await api.get(`/${username}/subscriptions`);
            const repos = response.data;

            return repos;
        } catch(error) {
            throw new Error(error);
        }
    }

    const githubInfos = {
        findProfile,
        setProfile,
        findRepos,
        findStared,
        profile
    }

    return (
        <userContext.Provider value={githubInfos}>
            { children }
        </userContext.Provider>
    )
}