// UpdateRecipeModal.jsx
import clsx from "clsx";
import React from "react";
import { ImCross } from "react-icons/im";
import {
  Field,
  Fieldset,
  Input,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const UpdateRecipeModal = ({ isOpen, onClose, handleSubmit, defaultData }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-xl w-full mx-4 sm:mx-auto rounded-xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          <ImCross />
        </button>

        <form onSubmit={handleSubmit}>
          <Fieldset className="space-y-3">
            <Legend className="text-lg font-semibold text-gray-900">
              Update Recipe
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
                defaultValue={defaultData?.image}
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
                defaultValue={defaultData?.title}
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
                defaultValue={defaultData?.ingredients}
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
                defaultValue={defaultData?.instructions}
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
                  defaultValue={defaultData?.cuisine}
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
                defaultValue={defaultData?.time}
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
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                  (cat) => (
                    <label key={cat} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="categories"
                        value={cat}
                        defaultChecked={defaultData?.categories?.includes(cat)}
                        className="accent-[#A31621]"
                      />
                      {cat}
                    </label>
                  )
                )}
              </div>
            </Field>

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#A31621] py-2 font-semibold text-white hover:bg-[#86111a] focus:outline-none focus:ring-2 focus:ring-[#A31621]"
            >
              Save Changes
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipeModal;
