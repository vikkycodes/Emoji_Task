import React from "react";
import EmojiData from "./EmojiData";
import img1 from "./images/img1.jpg";
import "./styles.css";

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({ data: EmojiData });
  }
  handleSearch(searchTerm) {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="container">
        <header>
          <img src={img1} alt="" />
          <div className="image_overlay"></div>
          <h1>Emoji Search</h1>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
        </header>
        {this.state.data.map((emoji) => (
          <h2 key={emoji.title}>
            {emoji.symbol} {emoji.title}
          </h2>
        ))}
      </div>
    );
  }
}

export default App;
