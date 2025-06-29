import React from "react";
import banner from "../assets/chicken.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Your Next Favorite Recipe
            </h1>
            <p className="mb-5">
              Welcome to Recipe Book — a place to explore unique dishes, share
              your creations, and connect with fellow food lovers. Find, cook,
              and enjoy something amazing today!
            </p>
            <button
              className="px-6 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#A31621" }}
            >
              Explore Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
