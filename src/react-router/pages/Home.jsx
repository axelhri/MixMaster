import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import logo from "../undraw_beer_xg5f.svg";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

function Home() {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState(data.drinks);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    if (searchTerm.trim() === "") {
      setFilteredDrinks(data.drinks);
      return;
    }

    try {
      const response = await fetch(`${url}${searchTerm}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setFilteredDrinks(result.drinks || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <div className="form-flex">
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for cocktails..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            type="button"
            className="search-btn"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid">
        {filteredDrinks.length > 0 ? (
          filteredDrinks.map((item) => (
            <article key={item.idDrink} className="home-article">
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <div className="article-content">
                <h1 className="cocktail-name">{item.strDrink}</h1>
                <span className="glass">{item.strGlass}</span>
                <p className="alcohol">{item.strAlcoholic}</p>
                <Link
                  to={`/cocktail/${item.idDrink}`}
                  className="article-btn btn"
                >
                  Details
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="error-container">
            <p className="no-cocktails-found">No matching cocktails found...</p>
            <img src={logo} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
