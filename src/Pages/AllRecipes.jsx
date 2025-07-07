import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import Loading from "../Components/Loading";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://flavor-sever-two.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <Loading />
      </div>
    );
  }

  const cuisineTypes = ["All"];
  recipes.forEach((recipe) => {
    if (!cuisineTypes.includes(recipe.cuisine)) {
      cuisineTypes.push(recipe.cuisine);
    }
  });

  const filteredRecipes =
    selectedCuisine === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="px-10 pt-10">
        <label className="mr-2 text-black dark:text-white font-semibold">
          Cuisine Type:
        </label>
        <select
          className="border-2 border-black text-black dark:text-white dark:bg-gray-800 font-medium px-2 py-1 rounded"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisineTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="p-10 grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center mx-auto">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card bg-base-100 w-full max-w-xs md:w-96 shadow-sm mx-auto text-black dark:text-white dark:bg-gray-800"
          >
            <figure>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {recipe.title}
                <div className="badge border-none bg-[#A31621] text-white">
                  <BiSolidLike></BiSolidLike> {recipe.likeCount}
                </div>
              </h2>
              <p className="text-sm">
                <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Time:</span> {recipe.time} mins
              </p>
              <p className="text-sm">
                <span className="font-semibold">Time:</span>{" "}
                {recipe.categories.join(", ")}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/details/${recipe._id}`}>
                  <button className="btn btn-neutral">View Details</button>
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
