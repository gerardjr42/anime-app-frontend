import React, { useState } from "react";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);

  function checkFavorite() {
    setFavorite(!favorite);
  }
  return (
    <>
      <img
        src={
          favorite
            ? "/public/assets/images/bookmark-orange-clear.png"
            : "/public/assets/images/bookmark-filled.png"
        }
        alt={favorite ? "clear bookmark" : "filled bookmark"}
        className="ml-2 mt-2 h-6 w-6"
        onClick={checkFavorite}
      />
    </>
  );
}
