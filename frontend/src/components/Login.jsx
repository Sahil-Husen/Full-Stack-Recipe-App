import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { loginContext } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData); // calls your /api/auth/login route

      toast.success(res?.data?.message || "Login successful");

      
      loginContext(res?.data?.user,res?.data?.token)
      

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      // toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-10 bg-cyan-900">
      <div class="bg-cyan-950  p-5 ">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-[480px] w-full">
            <div class="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h1 class="text-slate-900 text-center text-3xl font-semibold">
                Login
              </h1>

              <form onSubmit={(e) => handleSubmit(e)} class="mt-12 space-y-6">
                <div>
                  <label class="text-slate-900 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <div class=" flex items-center">
                    <input
                      onChange={(e) => handleChange(e)}
                      name="email"
                      type="text"
                      required
                      class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      placeholder="Enter user name"
                    />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 relative right-1.5 "
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg> */}
                  </div>
                </div>
                <div>
                  <label class="text-slate-900 text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <div class="relative flex items-center">
                    <input
                      onChange={(e) => handleChange(e)}
                      name="password"
                      type="password"
                      required
                      class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-10 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-3 block text-sm text-slate-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      class="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div class="!mt-12">
                  <button
                    type="submit"
                    class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                  >
                    Login
                  </button>
                </div>
                <p class="text-slate-900 text-sm !mt-6 text-center">
                  Don't have an account?{" "}
                  <NavLink
                    to="/signup"
                    class="text-blue-900 underline ml-1 whitespace-nowrap font-bold"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
