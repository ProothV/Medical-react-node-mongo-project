import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MedicalSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.length > 2) {
      try {
        const response = await axios.get(
          "https://clinicaltables.nlm.nih.gov/api/conditions/v3/search",
          {
            params: { terms: userInput, maxList: 10 },
          }
        );
        setSuggestions(response.data[3]); // Medical conditions list
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search-results?query=${query}`);
    }
  };

  return (
    <form className="d-flex mx-auto w-50" onSubmit={handleSearchSubmit}>
      <input
        className="form-control me-2"
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search medicine or conditions..."
      />
      <button className="btn btn-light" type="submit">
        Search
      </button>
    </form>
  );
};

export default MedicalSearch;
