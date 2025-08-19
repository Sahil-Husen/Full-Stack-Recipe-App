// components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="  min-h-screen bg-cyan-950 text-gray-800 px-4 py-12">
      {/* Intro Section */}
      <div className="mt-10 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About RecipeApp</h1>
        <p className="text-lg text-white">
          RecipeApp is your ultimate destination for discovering, saving, and
          sharing mouth-watering recipes. Whether you’re a beginner or a pro
          chef, we’ve got something for everyone!
        </p>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">🔍 Search & Discover</h2>
          <p>Find recipes by ingredients, cuisine, cooking time, and more!</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">💾 Save Favorites</h2>
          <p>Bookmark your favorite dishes for quick access anytime.</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">📝 Submit Your Own</h2>
          <p>Contribute your own recipes and inspire food lovers globally.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">👨‍🍳 Cook With Ease</h2>
          <p>Step-by-step instructions and videos make cooking a breeze.</p>
        </div>
      </div>

      {/* Feedback Form */}
    </div>
  );
};

export default About;
