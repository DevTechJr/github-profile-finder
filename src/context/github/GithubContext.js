import { useContext, useState } from "react";
import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GithubToken = process.env.REACT_APP_Github_TOKEN;
const GitHubAPI = process.env.REACT_APP_Github_LINK;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_Github_LINK}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_Github_TOKEN}`,
      },
    });
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
