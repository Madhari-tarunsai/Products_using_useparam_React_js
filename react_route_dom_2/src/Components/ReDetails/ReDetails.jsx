import React from 'react';
import recipes from '../Recipes/RecipesData'; 
import { useParams } from 'react-router-dom';

const ReDetails = () => {
  const { id } = useParams();
  const matchedData = recipes.recipes.find((x) => x.id === Number(id)); // Correct: find instead of map

  if (!matchedData) {
    return <h1>Data not found</h1>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={matchedData.image} alt={matchedData.name} className="details-thumbnail" />
        <h1>{matchedData.name}</h1>
        <p><strong>Price:</strong> ${matchedData.price || 'N/A'}</p>
        <p><strong>Stock:</strong> {matchedData.stock || 'N/A'}</p>
        <p><strong>Comments:</strong> {matchedData.comment || 'No comments available.'}</p>
        <p><strong>Rating:</strong> ⭐ {matchedData.rating || 'N/A'}</p>
      </div>
    </div>
  );
};

export default ReDetails;
