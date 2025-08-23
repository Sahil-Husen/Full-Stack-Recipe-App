import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from token in localStorage
 useEffect(() => {
  const token = localStorage.getItem("authToken");

  if (token) {
    fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          logout();
        }
      })
      .catch((err) => {
        console.error("Failed to fetch user", err);
        logout();
      });
  }
}, []);


  const loginContext = (userData, token) => {
    setUser(userData); // ✅ set actual user object
    localStorage.setItem("authToken", token); // ✅ store only token
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ store user
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loginContext, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};




export const useAuth = () => useContext(AuthContext);
