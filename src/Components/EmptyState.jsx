import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-white p-8 rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        No Recipes Found
      </h2>
      <p className="text-gray-600 mb-4">
        You don't have any recipes yet. Start by adding some!
      </p>
      <Link to='/addRecipes'>
        <button className="px-6 py-2 border-none bg-[#A31621] text-white rounded-lg hover:bg-[#880f1a]">
          Add New Recipe
        </button>
      </Link>
    </div>
  );
};

export default EmptyState;
