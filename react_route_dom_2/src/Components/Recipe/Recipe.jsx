import React from 'react';
import "./Recipe.css";
import { Link } from 'react-router-dom';

const Recipe = (props) => {
  const singler = props.singlep;
  console.log(singler);

  return (
    <div className="recipecard">
      <img src={singler.image} alt={singler.name} className="recipe-image" />
      <h1 className="recipe-title">{singler.name}</h1>
      <Link to={`/recipes/recipe/${singler.id}`}>View_details</Link>
      
    </div>
  );
};

export default Recipe;
