import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/auth-context";
import { useContext } from "react";

const Home = (props) => {
    const ctx = useContext(AuthContext);
    return (
        <div className={classes.content}>
            <h1>This is home page</h1>
            <Button onClick={ctx.onLogout}>Logout</Button>
        </div>
    );
};

export default Home;
