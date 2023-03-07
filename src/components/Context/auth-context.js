import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [login, setLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === 1) {
            setLogin(true);
        }
    }, []);
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setLogin(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setLogin(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: login,
                onLogin: loginHandler,
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
