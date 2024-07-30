import React from "react";
import { Link } from "react-router-dom";

export default function Anime({ anime, id }) {
  return (
    <div>
      <Link to={`/animes/${id}`}>
        <img
          src={anime.image_url}
          alt="anime image"
          className="h-[20rem] w-[14rem]"
        />
      </Link>
      <p className="mt-2 font-sans font-semibold text-white">{anime.title}</p>
      <p className="mb-2 mt-1 font-sans text-sm text-gray-400">Sub | Dub</p>
    </div>
  );
}
