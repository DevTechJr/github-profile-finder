import { useContext, useState } from "react";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GithubToken = process.env.REACT_APP_Github_TOKEN;
const GitHubAPI = process.env.REACT_APP_Github_LINK;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  // testing function to test api
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  //user rrepos

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };
  // Get a user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
  // set loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUserRepos,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
