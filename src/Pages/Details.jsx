import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="hero rounded-2xl bg-[#FCF7F8] min-h-screen py-10">
      <div className="hero-content bg-gray-800 flex-col lg:flex-row-reverse gap-10">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="max-w-sm w-full rounded-lg shadow-2xl"
        />

        <div className="text-left max-w-xl">
          <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-sm mb-1">
            <span className="font-medium">Cuisine:</span> {recipe.cuisine}
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Time:</span> {recipe.time} mins
          </p>
          <p className="text-sm mb-3">
            <span className="font-medium">Categories:</span>{" "}
            {recipe.categories?.join(", ")}
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-1">Ingredients:</h4>
          <p className="text-sm whitespace-pre-line">{recipe.ingredients}</p>

          <h4 className="text-lg font-semibold mt-4 mb-1">Instructions:</h4>
          <p className="text-sm whitespace-pre-line">{recipe.instructions}</p>

          <button className="btn my-3 bg-[#A31621]">Like</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
