import React, { useEffect, useState } from "react";
import EmojiData from "./EmojiData.json";
import "./styles.css";
import img1 from "./images/img1.jpg";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div className="container">
      <header>
        <img src={img1} alt="" />
        <div className="image_overlay"></div>
        <h1>Emoji Search</h1>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </header>
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.symbol} {emoji.title}
        </h2>
      ))}
    </div>
  );
}

export default App;
