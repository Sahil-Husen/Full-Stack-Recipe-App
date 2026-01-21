import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RecipeDash from "./components/RecipeDash";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Layout with Navbar/Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
         <Route path="recipeDash" element={<RecipeDash />}></Route>
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/recipeDash"
        element={
          <ProtectedRoute>
            <RecipeDash />{" "}
          </ProtectedRoute>
        }
      />

      <Route path="dashboard" element={<Dashboard />}></Route>
     

      {/* Fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
