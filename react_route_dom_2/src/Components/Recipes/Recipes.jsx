import React from 'react'
import recipes from './RecipesData'
import Recipe from '../Recipe/Recipe'
import "./Recipes.css"


const Recipes = () => {
  return (
    <div className='recipesContainer'>
        
      {recipes.recipes.map((recipe)=>{
        return(
            <>
            {
               <Recipe singlep={recipe} />
            }
            </>

        )
      })}
    </div>
  )
}

export default Recipes
