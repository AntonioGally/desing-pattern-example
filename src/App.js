import { useState } from "react";

import RemoveFlow from "./Flows/RemoveFlow/RemoveFlow";
import AddFlow from "./Flows/AddFlow/AddFlow";
import RenderFlow from "./Flows/RenderFlow/RenderFlow";
import Button from "./Components/Button/Button";

function App() {
  const [loading, setLoading] = useState(false);
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
      <div style={{ marginTop: 20 }}>
        {todos.map((todo) => new RenderFlow(todo).start())}
      </div>
    </div>
  );
}

export default App;
