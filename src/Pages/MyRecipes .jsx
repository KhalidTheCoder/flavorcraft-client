import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-recipes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setRecipes(recipes.filter((r) => r._id !== id));
      });
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 mx-auto">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={recipe.image} alt={recipe.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {recipe.title}
              <div className="badge badge-secondary">
                Likes: {recipe.likeCount}
              </div>
            </h2>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>{recipe.cuisine}</p>
            <p>Time: {recipe.time} mins</p>
            <p>Category: {recipe.categories.join(", ")}</p>
            <div className="card-actions justify-end">
              <button className="badge badge-outline">Update</button>
              <button
                onClick={() => handleDelete(recipe._id)}
                className="badge badge-outline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;
