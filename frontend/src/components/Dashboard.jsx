import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { GoHome } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { BiDish } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import RecipeDash from "./RecipeDash";
import {NavLink} from 'react-router-dom'

function Dashboard() {
  const [isHandle, setHandle] = useState(false);
  const [isRecipe, setRecipe] = useState(false);

  const handleBar = () => {
    setHandle((prev) => !prev);
  };

 
  return (
    <div className="w-screen h-screen bg-cyan-900 text-white flex">
      {/* Sidebar */}
      <div
        className={`flex flex-col items-center ${
          isHandle ? "w-52" : "w-20"
        } h-full bg-cyan-950 shadow-2xl gap-10 transition-all duration-300`}
      >
        {/* Logo / Hamburger */}
        <div className="mt-10 h-[60px] w-[60px] rounded-full flex items-center justify-center cursor-pointer">
          {isHandle ? (
            <img
              onClick={handleBar}
              src={logo}
              alt="logo"
              className="w-full h-full rounded-full"
            />
          ) : (
            <RxHamburgerMenu
              size={30}
              onClick={handleBar}
              className="text-white"
            />
          )}
        </div>

        {/* Menu */}
        <div className="w-full flex flex-col items-center gap-5">
          <div className="flex items-center gap-3 w-full px-4 py-2 hover:bg-cyan-800 rounded cursor-pointer transition-all">
            <GoHome size={24} />
            {isHandle && <span>Home</span>}
          </div>

          <div className="flex items-center gap-3 w-full px-4 py-2 hover:bg-cyan-800 rounded cursor-pointer transition-all">
            <BiDish size={24} />
            {isHandle && (
              
              <NavLink to="/recipeDash" >  Recipes</NavLink>
              
            )}
          </div>

          <div className="flex items-center gap-3 w-full px-4 py-2 hover:bg-cyan-800 rounded cursor-pointer transition-all">
            <CgProfile size={24} />
            {isHandle && <span>Profile</span>}
          </div>

          <div className="flex items-center gap-3 w-full px-4 py-2 hover:bg-cyan-800 rounded cursor-pointer transition-all">
            <SlSettings size={24} />
            {isHandle && <span>Setting</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      {isRecipe ? (
        <RecipeDash />
      ) : (
        <div className="flex-1 p-4 sm:p-6 lg:p-10 bg-cyan-100 text-gray-800 overflow-y-auto">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
            Dashboard Overview
          </h1>

          {/* Welcome Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-8">
            <h2 className="text-lg sm:text-xl font-semibold">
              Welcome back, Sahil 👋
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Here’s a quick overview of your application. Keep up the good
              work!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow text-center hover:bg-cyan-500 hover:text-white transition-all duration-700 ">
              <h3 className="text-base sm:text-lg font-medium">
                Total Recipes
              </h3>
              <p className="text-xl sm:text-2xl font-bold  mt-2">120</p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow text-center hover:bg-cyan-500 hover:text-white transition-all duration-700 ">
              <h3 className="text-base sm:text-lg font-medium">Active Users</h3>
              <p className="text-xl sm:text-2xl font-bold text-cyan-600 mt-2">
                32
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow text-center hover:bg-cyan-500 hover:text-white transition-all duration-700 ">
              <h3 className="text-base sm:text-lg font-medium">New Messages</h3>
              <p className="text-xl sm:text-2xl font-bold text-cyan-600 mt-2">
                5
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow text-center hover:bg-cyan-500 hover:text-white transition-all duration-700 ">
              <h3 className="text-base sm:text-lg font-medium">
                Settings Updated
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-cyan-600 mt-2">
                3
              </p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Recent Activity
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li>
                ✅ You added a new recipe: <strong>"Spicy Paneer Wrap"</strong>
              </li>
              <li>✅ Profile updated</li>
              <li>⚙️ Settings changed: Notifications turned off</li>
              <li>
                💬 New comment on recipe: <strong>"Veg Biryani"</strong>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
