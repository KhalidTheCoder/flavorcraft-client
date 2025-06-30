import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import UpdateRecipeModal from "../Components/UpdateRecipeModal";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  const handleUpdateClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedRecipe = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisine: form.cuisine.value,
      time: parseInt(form.time.value),
      categories: Array.from(form.categories)
        .filter((input) => input.checked)
        .map((input) => input.value),
    };

    fetch(`http://localhost:3000/recipes/${selectedRecipe._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedList = recipes.map((r) =>
          r._id === selectedRecipe._id ? { ...r, ...updatedRecipe } : r
        );
        setRecipes(updatedList);
        setShowModal(false);
        setSelectedRecipe(null);
      });
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center bg-gray-50 mx-auto">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm mx-auto">
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
              <button
                onClick={() => handleUpdateClick(recipe)}
                className="badge badge-outline"
              >
                Update
              </button>
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

      {selectedRecipe && (
        <UpdateRecipeModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          handleSubmit={handleUpdateSubmit}
          defaultData={selectedRecipe}
        />
      )}
    </div>
  );
};

export default MyRecipes;
