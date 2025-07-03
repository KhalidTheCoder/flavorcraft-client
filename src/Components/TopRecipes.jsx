import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BiSolidLike } from "react-icons/bi";

const TopRecipes = ({ isDark }) => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch("https://flavor-sever-two.vercel.app/recipes/top")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data));
  }, []);

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      } py-10`}
    >
      <h2
        className={`text-4xl font-bold text-center pt-10 mb-20 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Discover The Most Loved Recipes By Our Food-Loving Community.
      </h2>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {topRecipes.map((recipe) => (
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
                <span className="font-semibold">Category:</span>{" "}
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
      <div className="flex justify-center py-10">
        <Link to="/recipes">
          <button
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: "#A31621" }}
          >
            See All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
