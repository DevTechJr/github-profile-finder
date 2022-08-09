import React from "react";
import UsersResults from "../components/users/UsersResults";
import { useEffect } from "react";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <div className="flex flex-column items-center justify-center">
      {/* SEARCH components */}
      <UserSearch />
      <UsersResults />
    </div>
  );
};

export default Home;
