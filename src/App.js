import { useState } from "react";

import RemoveFlow from "./Flows/RemoveFlow/RemoveFlow";
import AddFlow from "./Flows/AddFlow/AddFlow";
import Button from "./Components/Button/Button";
import List from "./Components/List/List";

function App() {
  const [, setLoading] = useState(false);
  const [todos, setTodos] = useState(["clean the house", "study react"]);

  function handleAddTodo() {
    let todoToAdd = `new todo [${todos.length - 2}]`;
    new AddFlow(todoToAdd, todos, setTodos, setLoading).start();
  }

  function handleRemoveTodo() {
    new RemoveFlow(todos.at(-1), todos, setTodos, setLoading).start();
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button onClick={handleAddTodo} label="Add todo" actionType={"add"} />
        <Button onClick={handleRemoveTodo} label="Remove todo" actionType={"remove"} />
      </div>
      <List todos={todos} />
    </div>
  );
}

export default App;
