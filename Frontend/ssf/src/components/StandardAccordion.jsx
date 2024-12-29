import React, { useState, useEffect } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTiles = async () => {
    try {
      const response = await fetch("https://ssfoundation.pythonanywhere.com/api/standard-categories/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data); // Inspect data structure
      const formattedTiles = data.map((section) => ({
        title: section.name.toUpperCase(), // Use `name` for title
        content: section.items, // Use `items` for content
      }));
      setTiles(formattedTiles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTiles();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="accordion-container">
      {tiles.map((tile, index) => (
        <div key={index} className="accordion-tile">
          <button
            className={`accordion-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {tile.title}
            <FontAwesomeIcon icon={faPlus} className="accordion-icon" />
          </button>
          <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
            <ul>
              {tile.content.map((item, subIndex) => (
                <li key={subIndex} className="list-item">
                  {item}
                  <hr className="separator" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
