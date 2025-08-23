import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoding] = useState(true);

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
        })
        .finally(() => {
          setLoding(false);
        });
    }else{
      setLoding(false);
    }
  }, []);

  const loginContext = (userData, token) => {
    setUser(userData); // ✅ set actual user object
    localStorage.setItem("authToken", token); // ✅ store only token
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ store user
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };

  console.log("user is : ", user);
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loginContext, logout,loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
