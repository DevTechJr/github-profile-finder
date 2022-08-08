import React from "react";
import { Link } from "react-router-dom";
import Fourofour from "../components/assets/Fourofour";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Fourofour />
      <h1 className="text-3xl pt-5 ">Oops! This page was not found!</h1>
      <button class="btn btn-ghost rounded-btn my-5">
        <Link to="/" exact>
          Go Back To Homepage
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
