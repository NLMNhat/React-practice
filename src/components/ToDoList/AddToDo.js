import { useRef } from "react";
import classes from "./AddToDo.module.css";

const AddToDo = (props) => {
    const inputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        props.submitForm(inputRef.current.value);
        inputRef.current.value = "";
    };
    return (
        <form className={classes.input} onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Enter your task here"
                ref={inputRef}
            ></input>
        </form>
    );
};

export default AddToDo;
