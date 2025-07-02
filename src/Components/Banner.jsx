import React from "react";
import banner from "../assets/chicken.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="my-10 mb-30">
      <div
        className="hero min-h-[calc(100vh-150px)] w-11/12 mx-auto rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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

              <Link to='/recipes'>
              
                     <button
              className="px-6 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#A31621" }}
            >
              Explore Recipes
            </button>

              </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
