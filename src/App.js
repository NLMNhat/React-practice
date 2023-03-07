import "./App.css";
import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./components/Context/auth-context";

function App() {
    const ctx = useContext(AuthContext);
    return (
        <React.Fragment>
            <main>
                {ctx.isLoggedIn && <Home />}
                {!ctx.isLoggedIn && <Login />}
            </main>
        </React.Fragment>
    );
}

export default App;
