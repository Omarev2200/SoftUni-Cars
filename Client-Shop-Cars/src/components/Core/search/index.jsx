import React from "react";
import "./styles.css";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="searchBox">
          <input
            className="searchInput"
            type="text"
            name="searchInput"
            placeholder="Search"
          />
          <button 
          type="submit" 
          className="searchButton" 
          href="/search">
            <i 
            className="fa fa-search">
            </i>
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default Search;
