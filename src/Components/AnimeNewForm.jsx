import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function AnimeNewForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState({
    title: "",
    genre: "",
    about: "",
    seasons: 0,
    image_url: "",
    cover_url: "",
    rating: 0,
    is_favorite: null,
  });

  const addAnime = () => {
    fetch(`${API}/animes`, {
      method: "POST",
      body: JSON.stringify(anime),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/animes`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleTextChange = (e) => {
    setAnime({
      ...anime,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setAnime({
      ...anime,
      is_favorite: !anime.is_favorite,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnime();
  };

  return (
    <>
      <h2 className="mt-4 text-center text-4xl text-white">Edit Form</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-[40%] flex-col font-mono"
      >
        <label htmlFor="title" className="text-white">
          Title:
        </label>
        <input
          id="title"
          value={anime.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Anime Title"
          required
        />
        <label htmlFor="genre" className="text-white">
          Genre:
        </label>
        <input
          id="genre"
          value={anime.genre}
          type="text"
          onChange={handleTextChange}
          placeholder="Anime Genre"
          required
        />
        <label htmlFor="about" className="text-white">
          About:
        </label>
        <textarea
          id="about"
          value={anime.about}
          type="textbox"
          onChange={handleTextChange}
          placeholder="About Anime"
          rows={7}
          cols={40}
          required
        />
        <label htmlFor="image_url" className="text-white">
          Cover Photo:
        </label>
        <input
          id="image_url"
          value={anime.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Cover Photo URL"
          required
        />
        <label htmlFor="cover_url" className="text-white">
          Background Cover:
        </label>
        <input
          id="cover_url"
          value={anime.cover_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Background Cover URL"
          required
        />
        <label htmlFor="rating" className="text-white">
          Rating:
        </label>
        <input
          id="rating"
          value={anime.rating}
          type="number"
          onChange={handleTextChange}
          step="0.1"
          min="1"
          max="5"
          required
        />
        <label htmlFor="seasons" className="text-white">
          Seasons:
        </label>
        <input
          id="seasons"
          value={anime.seasons}
          type="number"
          onChange={handleTextChange}
          min="1"
          required
        />
        <label htmlFor="is_favorite" className="text-center text-white">
          Favorite:
        </label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={anime.is_favorite}
        />
        <br />
        <input
          type="submit"
          className="mx-auto mt-4 w-[25%] rounded-md border text-white"
        />
      </form>
    </>
  );
}
