import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // Optional: only if using routing

function RecipeDash() {
  const url = import.meta.env.VITE_APP_RECIPE_ADD_URL;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    properties: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
     
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("properties", formData.properties);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: data,
      });

      await res.json();

      toast.success("Recipe Added!");

      // for clearing the previous stored data and cleaning the fields
      setFormData({
        name: "",
        description: "",
        properties: "",
        image: null,
      });

      document.getElementById("fileInput").value = "";
    } catch (error) {
      console.log("Error in Submitting", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 to-white text-gray-800">
      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 mt-10 text-center text-gray-900">
          Add a New Recipe 🍽️
        </h2>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-xl shadow-md space-y-1 border border-gray-200"
        >
          {/* Recipe Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Recipe Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              id="name"
              name="name"
              value={formData.name}
              type="text"
              placeholder="e.g., Creamy Mushroom Pasta"
              className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>

          {/* Properties */}
          <div className="flex flex-col">
            <label
              htmlFor="properties"
              className="mb-2 font-medium text-gray-700"
            >
              Properties (e.g., Vegan, Spicy)
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.properties}
              name="properties"
              id="properties"
              type="text"
              placeholder="e.g., Vegan, Gluten-Free"
              className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="mb-2 font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              onChange={(e) => handleChange(e)}
              value={formData.description}
              name="description"
              id="description"
              rows={4}
              placeholder="Describe your recipe..."
              className="py-3 px-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label htmlFor="file" className="mb-2 font-medium text-gray-700">
              Upload Image
            </label>
            <input
              name="file"
              onChange={(e) => handleImageChange(e)}
              id="file"
              type="file"
              className="file:py-1 file:px-4 file:rounded-md file:border-0 file:bg-gray-800 file:text-white file:cursor-pointer hover:file:bg-blue-950 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center ">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-100 font-medium shadow-md mt-5 "
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default RecipeDash;
