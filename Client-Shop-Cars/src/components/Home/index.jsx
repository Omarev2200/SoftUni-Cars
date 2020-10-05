import React from "react";
import CarCard from "../Cars/car-card";
import SearchResult from "../Core/search/search-result";

import "./styles.css";

class Home extends React.Component {
  render() {
    const searchInput =
      this.props.location.search !== ""
        ? this.props.location.search.split("=")[1].replace("+", " ")
        : null;

    return (
      <React.Fragment>
        {searchInput && <SearchResult query={searchInput} />}
        {!searchInput && <CarCard />}
      </React.Fragment>
    );
  }
}

export default Home;
