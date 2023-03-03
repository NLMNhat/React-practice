import AddToDo from "./components/ToDoList/AddToDo";
import { useState } from "react";
import Card from "./components/UI/Card";
import ToDoList from "./components/ToDoList/ToDoList";
import Footer from "./components/UI/Footer";
import classes from "./App.module.css";

function App() {
    const [tasks, setTask] = useState([]);
    const submitFormHandler = (newTask) => {
        setTask((prevState) => {
            const randomID = String(Math.floor(Math.random() * 10000));
            return [...prevState, { task: newTask, id: randomID }];
        });
    };
    const deleteHandler = (id) => {
        console.log("click");
        setTask((prevState) => {
            const newData = prevState.filter((task) => task.id !== id);
            return newData;
        });
    };
    let taskCount = tasks.length;
    return (
        <Card className={classes.app}>
            <AddToDo submitForm={submitFormHandler}></AddToDo>
            <ToDoList tasks={tasks} onDelete={deleteHandler} />
            <Footer taskCount={taskCount} />
        </Card>
    );
}

export default App;
