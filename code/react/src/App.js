import React, { useState, useEffect } from "react";
import AuthContext from "./store/10_Reducer/auth-context";
import MainHeader from "./components/10_Reducer/MainHeader/MainHeader";
import Login from "./components/10_Reducer/Login/Login";
import Home from "./components/10_Reducer/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("IsLoggedIn");
    if (storedLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  });

  const loginHandler = (email, password) => {
    localStorage.setItem("IsLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
