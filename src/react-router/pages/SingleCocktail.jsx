import { Link, useLoaderData } from "react-router-dom";
import logo from "../undraw_page_not_found_re_e9o6.svg";

const detailsUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const singleCocktailLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await fetch(`${detailsUrl}${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch cocktail details");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function SingleCocktail() {
  const { drinks } = useLoaderData();
  const drink = drinks ? drinks[0] : null;

  if (!drink) {
    return <img src={logo} className="single-cocktail-error" />;
  }

  return (
    <section className="section">
      <h1 className="single-cocktail-title">{drink.strDrink}</h1>
      <article className="single-cocktail-article">
        <img src={drink.strDrinkThumb} alt="" />
        <div className="side">
          <div className="row">
            <span>Name :</span>
            <p>{drink.strDrink}</p>
          </div>
          <div className="row">
            <span>Category :</span>
            <p>{drink.strCategory}</p>
          </div>
          <div className="row">
            <span>Info :</span>
            <p>{drink.strAlcoholic}</p>
          </div>
          <div className="row">
            <span>Glass :</span>
            <p>{drink.strGlass}</p>
          </div>
          <div className="row">
            <span>Name :</span>
            <p>
              {drink.strIngredient1}, {drink.strIngredient2},
              {drink.strIngredient3}, {drink.strIngredient4},
            </p>
          </div>
          <div className="row">
            <span>Instructions :</span>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </article>
      <div className="btn-container">
        <Link to="/" className="btn single-cocktail-btn">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}

export default SingleCocktail;
