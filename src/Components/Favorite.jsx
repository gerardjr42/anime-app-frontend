import React from "react";

export default function Favorite({ favorite }) {
  // const [favorite, setFavorite] = useState(false);

  // function checkFavorite({ favorite }) {
  //   setFavorite(!favorite);
  // }
  return (
    <>
      <img
        src={
          favorite
            ? "/assets/images/bookmark-filled.png"
            : "/assets/images/bookmark-orange-clear.png"
        }
        alt={favorite ? "clear bookmark" : "filled bookmark"}
        className="ml-2 mt-2 h-6 w-6"
        // onClick={checkFavorite}
      />
    </>
  );
}
