import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter someone's name", "error");
    } else {
      // we'll add search functionality here boi
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <div className="form-control ">
            <div className="relative ">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search for users : e.g. Ani"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-32 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            {" "}
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
