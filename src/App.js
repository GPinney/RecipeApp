import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  const addRecipe = (recipeToAdd) => setRecipes([ ...recipes, recipeToAdd]);

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const deleteRecipe = (recipeToDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== recipeToDelete))
  }
  

  

  return (
    <div className="App">
      <header style={{textAlign: "center", fontSize: 40, fontFamily: "playfair display sc"}}>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe = {deleteRecipe}/>
      <RecipeCreate addRecipe = {addRecipe}/>
    </div>
  );
}

export default App;
