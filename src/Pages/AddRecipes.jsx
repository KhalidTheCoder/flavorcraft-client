import React, { useContext } from "react";
import bgImg from "../assets/ella.jpg";
import {
  Field,
  Fieldset,
  Input,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddRecipes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const selectedCategories = formData.getAll("categories");
    if (selectedCategories.length === 0) {
      toast.error("Please select at least one category.");
      return;
    }

    const recipeData = {
      userEmail: user?.email,
      image: formData.get("image"),
      title: formData.get("title"),
      ingredients: formData.get("ingredients"),
      instructions: formData.get("instructions"),
      cuisine: formData.get("cuisine"),
      time: formData.get("time"),
      categories: formData.getAll("categories"),
      likeCount: 0,
    };

    console.log(recipeData);

    fetch("https://flavor-sever-two.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/my-recipes");
        toast.success("Recipe Added Successfully")

      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="w-full mx-auto max-w-xl py-10">
        <form onSubmit={handleSubmit}>
          <Fieldset className="space-y-3 rounded-xl bg-white p-4 sm:p-6 shadow-md">
            <Legend className="text-lg font-semibold text-gray-900">
              Add a New Recipe
            </Legend>

            <Field>
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <Input
                id="image"
                type="text"
                name="image"
                required
                placeholder="https://example.com/image.jpg"
                className={clsx(
                  "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900",
                  "focus:outline-none focus:ring-2 focus:ring-[#A31621]"
                )}
              />
            </Field>

            <Field>
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Input
                id="title"
                type="text"
                name="title"
                required
                placeholder="Spicy Chicken Curry"
                className={clsx(
                  "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900",
                  "focus:outline-none focus:ring-2 focus:ring-[#A31621]"
                )}
              />
            </Field>

            <Field>
              <label
                htmlFor="ingredients"
                className="text-sm font-medium text-gray-700"
              >
                Ingredients
              </label>
              <Textarea
                id="ingredients"
                name="ingredients"
                required
                placeholder="Chicken, spices, oil, onions..."
                rows={3}
                className={clsx(
                  "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 resize-none",
                  "focus:outline-none focus:ring-2 focus:ring-[#A31621]"
                )}
              />
            </Field>

            <Field>
              <label
                htmlFor="instructions"
                className="text-sm font-medium text-gray-700"
              >
                Instructions
              </label>
              <Textarea
                id="instructions"
                name="instructions"
                required
                placeholder="Step-by-step preparation guide..."
                rows={4}
                className={clsx(
                  "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 resize-none",
                  "focus:outline-none focus:ring-2 focus:ring-[#A31621]"
                )}
              />
            </Field>

            <Field>
              <label
                htmlFor="cuisine"
                className="text-sm font-medium text-gray-700"
              >
                Cuisine Type
              </label>
              <div className="relative">
                <Select
                  id="cuisine"
                  name="cuisine"
                  required
                  className={clsx(
                    "mt-2 block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900",
                    "focus:outline-none focus:ring-2 focus:ring-[#A31621]",
                    "*:text-black"
                  )}
                >
                  <option>Italian</option>
                  <option>Mexican</option>
                  <option>Indian</option>
                  <option>Chinese</option>
                  <option>Others</option>
                </Select>
                <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 h-5 w-5 text-gray-500" />
              </div>
            </Field>

            <Field>
              <label
                htmlFor="time"
                className="text-sm font-medium text-gray-700"
              >
                Preparation Time (in minutes)
              </label>
              <Input
                id="time"
                type="number"
                name="time"
                required
                placeholder="45"
                className={clsx(
                  "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900",
                  "focus:outline-none focus:ring-2 focus:ring-[#A31621]"
                )}
              />
            </Field>

            <Field>
              <label className="text-sm font-medium text-gray-700">
                Categories
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
                <label
                  htmlFor="cat-breakfast"
                  className="flex items-center gap-2"
                >
                  <input
                    id="cat-breakfast"
                    type="checkbox"
                    name="categories"
                    value="Breakfast"
                    className="accent-[#A31621]"
                  />
                  Breakfast
                </label>

                <label htmlFor="cat-lunch" className="flex items-center gap-2">
                  <input
                    id="cat-lunch"
                    type="checkbox"
                    name="categories"
                    value="Lunch"
                    className="accent-[#A31621]"
                  />
                  Lunch
                </label>

                <label htmlFor="cat-dinner" className="flex items-center gap-2">
                  <input
                    id="cat-dinner"
                    type="checkbox"
                    name="categories"
                    value="Dinner"
                    className="accent-[#A31621]"
                  />
                  Dinner
                </label>

                <label
                  htmlFor="cat-dessert"
                  className="flex items-center gap-2"
                >
                  <input
                    id="cat-dessert"
                    type="checkbox"
                    name="categories"
                    value="Dessert"
                    className="accent-[#A31621]"
                  />
                  Dessert
                </label>

                <label htmlFor="cat-vegan" className="flex items-center gap-2">
                  <input
                    id="cat-vegan"
                    type="checkbox"
                    name="categories"
                    value="Vegan"
                    className="accent-[#A31621]"
                  />
                  Vegan
                </label>
              </div>
            </Field>

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#A31621] py-2 font-semibold text-white hover:bg-[#86111a] focus:outline-none focus:ring-2 focus:ring-[#A31621]"
            >
              Add Recipe
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddRecipes;
