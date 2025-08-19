import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Home from "./components/Home"; // actual home content
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
// import Signup from "./components/Signup";
import RecipeDash from "./components/RecipeDash";

function App() {
  return (
    <Routes>
      {/* 👇 Layout with navbar and footer */}
      <Route path="/" element={<Layout />}>
        {/* 👇 Home component only for "/" */}
        <Route index element={<Home />} />
        {/* 👇 Nested routes (will show inside <Outlet /> in Layout) */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login/>} />

      </Route>

      

      
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      <Route path="/recipeDash" element={<RecipeDash/>} />
      <Route path="/dashBoard" element={<Dashboard/>} />
    </Routes>
    // <div className="h-screen  w-screen">
    // <Dashboard></Dashboard>
   
    // </div>
    
  );
}

export default App;
