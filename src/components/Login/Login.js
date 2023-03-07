import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useState, useRef, useReducer, useEffect, useContext } from "react";
import AuthContext from "../Context/auth-context";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: action.val.trim().includes("@"),
        };
    } else if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.trim().includes("@"),
        };
    }
};
const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6,
        };
    } else if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
};

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });
    const [formIsValid, setFormIsValid] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const ctx = useContext(AuthContext);
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            if (emailIsValid && passwordIsValid) {
                setFormIsValid(true);
            }
        }, 500);
        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);
    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    };
    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };
    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };
    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            ctx.onLogin(emailState, passwordState);
        } else if (!emailIsValid) {
            emailRef.current.focus();
        } else {
            passwordRef.current.focus();
        }
    };
    console.log();
    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailRef}
                    id="email"
                    type="email"
                    label="E-mail"
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    isValid={emailState.isValid}
                />
                <Input
                    ref={passwordRef}
                    id="password"
                    type="password"
                    label="Password"
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    isValid={passwordState.isValid}
                />
                <div className={classes.actions}>
                    <Button type="submit">Okay</Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
