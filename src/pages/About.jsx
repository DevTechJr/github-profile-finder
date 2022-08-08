import React from "react";
import GitHubCat from "../components/assets/GitHubCat";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">About this project :</h1>
      <GitHubCat height={200} width={250} />
      <p className="my-5">
        A project created to leverage the power of GitHub's 3rd Party REST API.
        This project can help you find users on GitHub with a simple search of
        their name!
      </p>
      <div className="flex justify-between items-center">
        <button className="hover:bg-gray-600 p-2 rounded m-5">
          <a href="https://docs.github.com/en/rest">GitHub REST API</a>
        </button>
        <button className="hover:bg-gray-500 p-2 rounded m-5">
          <a href="https://github.com/DevTechJr/github-profile-finder">
            GitHub Repo Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
