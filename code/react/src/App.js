import React, { useState, useEffect } from 'react';
import Login from './components/10_Reducer/Login/Login';
import Home from './components/10_Reducer/Home/Home';
import MainHeader from './components/10_Reducer/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('IsLoggedIn');
    if (storedLoggedIn === '1') { setIsLoggedIn(true); }
  });

  const loginHandler = (email, password) => {
    localStorage.setItem('IsLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
