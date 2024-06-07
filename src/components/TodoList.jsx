import { useSelector, useDispatch } from "react-redux";
import { updateValue, addTask } from "../redux/todoSlice";
import '../App.css'
import List from "./List";

const TodoList = () => {
  const value = useSelector((state) => state.todo.inputTaskValue);
  const todos = useSelector((state) => state.todo.todos);
  const selectedEditTask = useSelector((state) => state.todo.selectedEditTask);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        className="input-filed"
        value={value}
        onChange={handleChange}
      />
      {/* <button className="add-btn" onClick={() => dispatch(addTask())}>Add</button> */}
      <button className="add-btn" onClick={() => dispatch(addTask())}>
        {selectedEditTask ? "Update" : "Add"}
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px"
        }}
      >
        {todos.length!==0 ? (
          todos.map((todo) => <List key={todo.id} {...todo} />)
        ) : (
          <h3 className="no-todos">No todos...</h3>
        )}
      </div>
    </div>
  );
};

export default TodoList;
