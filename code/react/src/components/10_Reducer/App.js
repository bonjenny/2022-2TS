import React, { useContext } from "react";
import AuthContext from "./store/10_Reducer/auth-context";
import MainHeader from "./components/10_Reducer/MainHeader/MainHeader";
import Login from "./components/10_Reducer/Login/Login";
import Home from "./components/10_Reducer/Home/Home";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}
export default App;
