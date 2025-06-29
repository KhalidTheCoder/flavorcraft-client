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
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="p-4 border rounded shadow">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-bold mt-2">{recipe.title}</h2>
          <p>{recipe.cuisine}</p>
          <p>Time: {recipe.time} mins</p>
          <p>Likes: {recipe.likeCount}</p>
          <button
            onClick={() => handleDelete(recipe._id)}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
         


         
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;
