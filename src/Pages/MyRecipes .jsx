import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import UpdateRecipeModal from "../Components/UpdateRecipeModal";
import EmptyState from "../Components/EmptyState";
import { BiSolidLike } from "react-icons/bi";
import Loading from "../Components/Loading";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://flavor-sever-two.vercel.app/my-recipes?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://flavor-sever-two.vercel.app/recipes/${id}`, {
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

    fetch(`https://flavor-sever-two.vercel.app/recipes/${selectedRecipe._id}`, {
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

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <Loading />
      </div>
    );
  }

  if (recipes.length === 0) {
    return <EmptyState></EmptyState>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-10 grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card bg-base-100 w-full max-w-xs md:w-96 shadow-sm mx-auto"
          >
            <figure>
              <img src={recipe.image} alt={recipe.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {recipe.title}
                <div className="badge border-none text-white bg-[#A31621]">
                  <BiSolidLike></BiSolidLike> {recipe.likeCount}
                </div>
              </h2>
              <p>
                <span className="font-semibold">Ingredients:</span>{" "}
                {recipe.ingredients}
              </p>
              <p>
                <span className="font-semibold">Instructions:</span>{" "}
                {recipe.instructions}
              </p>
              <p className="font-semibold">{recipe.cuisine}</p>
              <p>
                <span className="font-semibold">Time:</span> {recipe.time} mins
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {recipe.categories.join(", ")}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleUpdateClick(recipe)}
                  className="btn btn-neutral btn-outline"
                >
                  Update <GrUpdate />
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="btn btn-neutral btn-outline"
                >
                  Delete <MdDeleteForever size={25} />
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
    </div>
  );
};

export default MyRecipes;
