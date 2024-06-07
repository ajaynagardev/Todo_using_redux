import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [ ],
    inputTaskValue: "",
    selectedEditTask: null,
    cuurId:''
  },

  reducers: {
    addTask: (state,action) => {
      
      if (state.selectedEditTask) {
        const task = state.todos.find(task => task.id === state.selectedEditTask.id);
        if (task) {
          task.text = state.inputTaskValue;
        }
        state.selectedEditTask = null;
      }else{
        let idTodo = Math.floor(Math.random()*1000)
        const newTask = {
        id: idTodo,
        text: state.inputTaskValue
      };

        if (state.inputTaskValue.length) {
          state.todos.push(newTask);
        }
      }
      state.inputTaskValue = "";
    },

    deleteTask: (state, action) => {
      const idxTask = state.todos.findIndex((task) => task.id === action.payload);
      console.log('<<< idxTask >>>',idxTask)
      state.todos.splice(idxTask, 1);
    },

    editTask: (state, action) => {
      const task = state.todos.find(task => task.id === action.payload.id);
      if (task) {
        state.inputTaskValue = task.text;
        state.selectedEditTask = task;
      }
    },
    
    updateValue: (state, action) => {
      state.inputTaskValue = action.payload;
    }
  }
});

export const {addTask,deleteTask,updateValue,editTask,editAddTask} = todoSlice.actions;

export default todoSlice.reducer;