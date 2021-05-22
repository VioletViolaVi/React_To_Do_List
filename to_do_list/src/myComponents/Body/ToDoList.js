import React from "react";
import ToDoItem1 from "./ToDoListItems/ToDoItem1";
import ToDoItem2 from "./ToDoListItems/ToDoItem2";
import ToDoItem3 from "./ToDoListItems/ToDoItem3";
import ToDoItem4 from "./ToDoListItems/ToDoItem4";

function ToDoList() {
    return (
        <main>
            <ToDoItem1 />
            <ToDoItem2 />
            <ToDoItem3 />
            <ToDoItem4 />
        </main>
    )
}

export default ToDoList