import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  async function handleFetch() {
    try {
      let result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyBDMUu_WCHI0Lt73d9FEQkr95H4YhEv2n0&maxResults=8`
      );
      //console.log(result.data.items);
      setResults(result.data.items);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="search-container">
      <div className="input-group">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          onClick={() => handleFetch()}
          type="submit"
          className="btn btn-outline-primary"
        >
          Search
        </button>
      </div>{" "}
      <br />
      <div className="alert alert-light" role="alert">
        No Search Results Yet!, Please submit a search above!
      </div>
      {results.map(({ etag, snippet }) => {
        return (
          <div key={etag} className="card" style={{ width: "18rem" }}>
            <img
              src={snippet.thumbnails.high.url}
              className="card-img-top"
              alt={snippet.channelTitle}
            />
            <div className="card-body">
              <h2 className="card-text">{snippet.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBar;
