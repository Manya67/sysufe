import React from "react";
import { useSelector } from "react-redux";

export default function Popular({ onChildValue }) {
  const favCat = useSelector((store) => store.favSlice.items);
  const popularList = [
    "ENGINEERING DAYS",
    "BANGALORE STORIES",
    "GOA DIARIES",
    "NITK STUFFS",
    "IIM THINGS",
    "IIMB FACTS",
    "SHAYARI",
    "VIKAS MEENA",
    "ENGINEERING DAYS",
    "BANGALORE STORIES",
    "GOA DIARIES",
    "NITK STUFFS",
    "IIM THINGS",
    "IIMB FACTS",
    "SHAYARI",
    "VIKAS MEENA",
  ];
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
          {favCat &&
            favCat.slice(0, 10).map((cat, index) => {
              return <ListItem value={cat} key={index} />;
            })}
          {favCat.length < 10 &&
            popularList.slice(0, 10 - favCat.length).map((cat, index) => {
              return <ListItem value={cat} key={index} />;
            })}
        </ul>
      </div>
    </div>
  );
}
