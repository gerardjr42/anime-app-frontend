import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex w-full bg-black py-2 text-white">
      <Link
        to="/transactions"
        className="cursor-pointer justify-start self-center text-2xl"
      >
        Anime App
      </Link>
      <div className="flex flex-1 justify-end self-center">
        <button className="cursor-pointer border border-gray-400 px-8 py-3 text-xs hover:bg-blue-500">
          <Link to="/transactions/new">Add New Anime</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
