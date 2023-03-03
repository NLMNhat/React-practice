import classes from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div>
                {props.taskCount > 1
                    ? `${props.taskCount} tasks left!`
                    : `${props.taskCount} task left!`}
            </div>
            <div>MindX todolist</div>
        </div>
    );
};

export default Footer;
