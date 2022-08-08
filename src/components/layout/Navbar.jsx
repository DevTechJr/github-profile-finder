import React from "react";
import { FaGithub } from "react-icons/fa";
import { ReactPropTypes } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, subHead }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="px-2 mx-2 flex-none py-10">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" exact className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: "GitHub Profile Finder",
  subHead: "A tool to find one's GitHub",
};
