import React from "react";
import ToDoList from './myComponents/Body/ToDoList';
import Title from './myComponents/Head/Title';

function App() {
  return (
    <React.StrictMode>
      <Title />
      <ToDoList />
    </React.StrictMode>
  );
}

export default App;
