import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex w-full bg-[#23252A] py-2 text-white">
      <Link
        to="/animes"
        className="ml-12 cursor-pointer justify-start self-center text-2xl"
      >
        <div className="flex flex-row">
          <img
            src="/assets/images/anime-icon.png"
            alt="anime icon"
            className="mr-1 h-8 w-8"
          />
          <p className="font-sans font-semibold">ime Hub</p>
        </div>
      </Link>
      <div className="flex flex-1 justify-end self-center">
        <Link to="/transactions/new">
          <img
            src="/assets/images/plus-symbol-button.png"
            alt="plus icon"
            className="mr-8 h-4 w-4 cursor-pointer hover:h-6 hover:w-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
