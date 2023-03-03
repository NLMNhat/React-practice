import { useState, useRef, Fragment } from "react";
import classes from "./AddToDo.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddToDo = (props) => {
    const inputRef = useRef();
    const [error, setError] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        if (!inputRef.current.value) {
            setError({
                title: "Invalid content",
                content: "Empty input is not allowed",
            });
        } else {
            props.submitForm(inputRef.current.value);
            inputRef.current.value = "";
        }
    };
    const clickHandler = () => {
        setError(null);
    };
    return (
        <Fragment>
            {error && (
                <ErrorModal
                    title="Checking"
                    content="checking content"
                    onClick={clickHandler}
                />
            )}
            <form className={classes.input} onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter your task here"
                    ref={inputRef}
                ></input>
            </form>
        </Fragment>
    );
};

export default AddToDo;
