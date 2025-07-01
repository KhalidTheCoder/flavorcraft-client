import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  const handleLike = () => {
    if (!user) {
      toast.error("Please login to like this recipe.");
      return;
    }

    if (user.email === recipe.userEmail) {
      toast.warning("You cannot like your own recipe.");
      return;
    }

    const updatedLikeCount = (recipe.likeCount || 0) + 1;

    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likeCount: updatedLikeCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipe({ ...recipe, likeCount: updatedLikeCount });
        toast.success("Thanks for liking the recipe!");
      });
  };

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-[#FCF7F8] min-h-screen">
      <h2 className="text-center text-[#A31621] text-3xl underline font-bold py-15">
        {recipe.likeCount ?? 0} People interested in this recipe
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-16 lg:gap-20 bg-white max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl shadow-sm">
        <div className="w-full md:w-1/2">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover md:mx-0"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A31621] mb-4">
            {recipe.title}
          </h1>

          <div className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            <p>
              <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {recipe.time} mins
            </p>
            <p>
              <span className="font-semibold">Categories:</span>{" "}
              {recipe.categories?.join(", ")}
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Ingredients:
            </h4>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {recipe.ingredients}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Instructions:
            </h4>
            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
              {recipe.instructions}
            </p>
          </div>

          <button
            onClick={handleLike}
            aria-label="Like this recipe"
            className="mt-6 bg-[#A31621] hover:bg-[#880f1a] text-white font-semibold px-5 py-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A31621]"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
