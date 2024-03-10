import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Popular({ onChildValue, list }) {
  // Getting the favourites list from the local storage
  const favCat = useSelector((store) => store.favSlice.items);

  function ListItem({ value }) {
    const handleClick = () => {
      onChildValue(value);
    };

    return <li onClick={handleClick}>{value}</li>;
  }

  return (
    <div className="popular">
      <h1>{favCat.length > 0 ? "Favourite Topics" : "Popular Topics"}</h1>

      <div className="list">
        <ul className="list-items">
          {/* Firstly, getting fav topic list */}
          {favCat &&
            favCat.slice(0, 10).map((cat, index) => {
              return <ListItem value={cat} key={index} />;
            })}
          {/* getting the rest category from popular list  */}
          {favCat.length < 10 &&
            list.slice(0, 10 - favCat.length).map((cat, index) => {
              if (favCat && !favCat.includes(cat[0]))
                return <ListItem value={cat[0]} key={index} />;
            })}
        </ul>
      </div>
    </div>
  );
}
