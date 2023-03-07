import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });
    return (
        <div
            className={
                classes.input + " " + (!props.isValid ? classes.invalid : "")
            }
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
            ></input>
        </div>
    );
});

export default Input;
