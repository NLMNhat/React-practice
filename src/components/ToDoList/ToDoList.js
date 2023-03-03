import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
    const clickHandler = (event) => {
        props.onDelete(event.target.id);
    };
    return (
        <ul className={classes.list}>
            {props.tasks.map(({ task, id }) => (
                <li key={id}>
                    <input id={id} type="radio" onClick={clickHandler}></input>
                    <label htmlFor={id}>{task}</label>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
