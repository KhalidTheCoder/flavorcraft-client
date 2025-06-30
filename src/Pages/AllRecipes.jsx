import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center bg-gray-50">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card bg-base-100 w-96 shadow-sm mx-auto"
          >
            <figure>
              <img src={recipe.image} alt={recipe.title} />
            </figure>
            <div className="card-body bg-gray-800 rounded-b-lg">
              <h2 className="card-title flex justify-between">
                {recipe.title}
                <div className="badge border-none bg-[#FCF7F8] text-black">
                  Likes: {recipe.likeCount}
                </div>
              </h2>
              <p>{recipe.cuisine}</p>
              <p>Category: {recipe.categories.join(", ")}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${recipe._id}`}>
                  <button className="btn border-none bg-[#A31621]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
