import { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [maxResults, setMaxResults] = useState(8);

  const apiKey = import.meta.env.VITE_API_KEY;

  function handleMaxResults(event) {
    setMaxResults(event.target.value);
  }

  async function handleFetch() {
    try {
      let result = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${apiKey}&maxResults=${maxResults}`
      );
      //console.log(result.data.items);
      setResults(result.data.items);
    } catch (e) {
      console.log(e);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch("");
    handleFetch();
  }

  return (
    <div className="search-container">
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <label htmlFor="results" style={{ marginRight: "5px" }}>
            Max Results
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="50"
            step="1"
            onChange={handleMaxResults}
            value={maxResults}
            className="max-results"
          />
          <button
            onClick={() => handleFetch()}
            type="submit"
            className="btn btn-outline-primary"
          >
            Search
          </button>
        </form>
        <br />
        {!results.length && (
          <div className="alert alert-light" role="alert" id="alert-style">
            No search results yet! Please submit a search above!
          </div>
        )}
      </div>{" "}
      <br />
      <div className="video-grid">
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
    </div>
  );
}
