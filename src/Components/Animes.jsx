import React, { useEffect, useState } from "react";
import Anime from "./Anime";

const API = import.meta.env.VITE_API_URL;

export default function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setAnimes(resJSON);
      })
      .catch((e) => console.error(e));
  }, []);

  console.log(animes);

  return (
    <div className="mx-auto mt-12 grid w-3/4 grid-cols-5">
      {Array.isArray(animes) && animes.length > 0 ? (
        animes.map((anime) => {
          return (
            <Anime key={anime.anime_id} anime={anime} id={anime.anime_id} />
          );
        })
      ) : (
        <div> Erorr: No Anime Found </div>
      )}
    </div>
  );
}
