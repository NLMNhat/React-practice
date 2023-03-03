import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};
const Overlay = (props) => {
    return (
        <div className={classes.overlay}>
            <header className="">
                <h2>{props.title}</h2>
            </header>
            <p>{props.content}</p>
            <footer>
                <Button onClick={props.onClick} type="button" value="Okay" />
            </footer>
        </div>
    );
};

const ErrorModal = (props) => {
    const confirmHandler = () => {
        console.log("backdrop");
    };
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={confirmHandler} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    onClick={props.onClick}
                    title={props.title}
                    content={props.content}
                />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
