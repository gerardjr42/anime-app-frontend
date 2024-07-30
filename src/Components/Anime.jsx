import React from "react";
import { Link } from "react-router-dom";

export default function Anime({ anime, id }) {
  return (
    <div>
      <Link to={`/animes/${id}`}>
        <img
          src={anime.image_url}
          alt="anime image"
          className="h-[22rem] w-[16rem]"
        />
      </Link>
      <p>{anime.title}</p>
    </div>
  );
}
