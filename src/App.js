import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo list</h1>
        <TodoList />
      </div>
    </div>
  );
}
