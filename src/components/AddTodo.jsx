import React, { useState } from "react";
import { addTodo } from "../slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const handleAddTodo = () => {
    dispatch(addTodo(title));
  };
  return (
    <div className="h-44 rounded-md border px-2 py-2 bg-white w-96 flex flex-col gap-2">
      <input
        type="text"
        className="outline-none border px-1 py-1 w-full  rounded-md"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="px-3 py-1 rounded-md bg-sky-500 text-white font-semibold"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <div key={todo.title} className="h-4 w-full px-2 py-1">
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
