import React, { useState, useEffect } from 'react';
import style from "./Product.module.css";

export default function Products() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza"); 
    const data = await response.json();
    setRecipes(data.recipes); 
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className='container'>
      <div className='row g-3'>
        {recipes.map(recipe => (
          <div className='col-lg-3' >
            <div className='card'>
              <h2 className={`${style.fontsize}`}>{recipe.title.split(' ').slice(0, 3).join(' ')}</h2>
              <img src={recipe.image_url} /> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
