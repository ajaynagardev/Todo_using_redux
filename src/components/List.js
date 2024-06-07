import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/todoSlice";
import '../App.css'
const List = ({ id, text }) => {
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <div className="list-container-text"
        onClick={() => dispatch(editTask({ id, text }))}>
        {text}
      </div>
      <button onClick={() => dispatch(deleteTask(id))} className="delete-btn">Delete</button>
    </div>
  );
};

export default List;
