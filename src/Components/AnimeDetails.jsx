import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Favorite from "./Favorite";
import StarRating from "./StarRating";

const API = import.meta.env.VITE_API_URL;

export default function AnimeDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [anime, setAnime] = useState({
    title: "",
    genre: "",
    about: "",
    seasons: 0,
    image_url: "",
    rating: 0,
    is_favorite: false,
  });

  useEffect(() => {
    fetch(`${API}/animes/${id}`)
      .then((response) => response.json())
      .then((resJSON) => setAnime(resJSON))
      .catch((e) => navigate("/notfound"));
  }, [id, navigate]);

  const handleDelete = () => {
    fetch(`${API}/animes/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/animes`))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="relative">
        <img
          src={anime.cover_url}
          alt="anime cover"
          className="absolute inset-0 h-[32rem] w-full object-cover blur-sm filter"
        />
        <img
          src={anime.cover_url}
          alt="anime image"
          className="relative z-10 mx-auto h-[32rem] w-1/2"
        />
      </div>
      <div className="mx-auto mt-8 w-1/2 text-white">
        <div className="flex items-center self-center align-middle">
          <h2 className="font-sans text-3xl text-white">{anime.title}</h2>
          <Favorite favorite={anime.is_favorite} />
        </div>
        <p className="mb-2 text-sm text-gray-500">Sub | Dub</p>
        <div className="flex flex-row">
          <StarRating rating={anime.rating} />
          <p className="mx-2">|</p>
          <p className="text-white">Average rating: {anime.rating}</p>
        </div>
        <div>
          <p className="mt-4">{anime.about}</p>
          <p className="mt-2 inline-block border bg-[#213944] px-2 font-sans text-gray-300">
            {anime.genre}
          </p>
        </div>
        <div className="flex justify-end">
          <Link to={`/animes/${id}/edit`}>
            <button className="mr-2 rounded-l-md border px-1 hover:bg-[#FF9D03] hover:text-black">
              Edit
            </button>
          </Link>
          <Link>
            <button
              className="rounded-r-md border px-1 hover:bg-red-500 hover:text-black"
              onClick={handleDelete}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
