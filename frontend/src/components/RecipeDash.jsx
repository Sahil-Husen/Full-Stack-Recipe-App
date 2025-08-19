import React from "react";

function RecipeDash() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-cyan-950 to-blue-300 flex flex-col items-center py-4   px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50
       mb-10">
        Add a New Recipe 🍽️
      </h1>

      <form className="w-full   max-w-2xl bg-[#113F67]  p-8 sm:p-5 rounded-lg shadow-lg space-y-5">
        {/* Recipe Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold text-white">
            Recipe Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter the Recipe Name"
            className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          />
        </div>

        {/* Properties */}
        <div className="flex flex-col">
          <label
            htmlFor="properties"
            className="mb-1 font-semibold text-white"
          >
            Properties (e.g., Vegan, Spicy)
          </label>
          <input
            id="properties"
            type="text"
            placeholder="Enter properties"
            className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-1 font-semibold text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter description"
            rows={3.5}
            className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 resize-none"
          />
        </div>

        {/* Upload Image */}
        <div className="flex flex-col">
          <label htmlFor="file" className="mb-2 font-semibold text-white">
            Upload Image
          </label>
          <input
            id="file"
            type="file"
            className="file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:text-white file:cursor-pointer hover:file:bg-cyan-600 transition duration-200"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300 font-semibold shadow-md"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeDash;
