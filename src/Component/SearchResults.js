import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search", {
          params: { terms: searchTerm, maxList: 10 },
        })
        .then((response) => {
          setResults(response.data[3]); // List of conditions
        })
        .catch((error) => console.error("Error fetching search results:", error));
    }
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h2>Search Results for "{searchTerm}"</h2>
      {results.length > 0 ? (
        <ul className="list-group">
          {results.map((condition, index) => (
            <li key={index} className="list-group-item">
              {condition[0]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
