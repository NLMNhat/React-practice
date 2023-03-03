import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            className={`${classes.btn} + ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
};

export default Button;
