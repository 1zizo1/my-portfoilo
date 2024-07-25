import { useRef, useState } from 'react';

export default function About() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const HandleInput = () => {
    const inputText = inputRef.current.value;
    const newItem = { completed: false, inputText };
    setTodos([...todos, newItem]);
    inputRef.current.value = '';
  };

  const handleTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  const handleDeleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="container mx-auto p-4 min-h-28 py-28">
      <h2 className="text-2xl font-bold mb-4 text-center">To-Do List</h2>
      <ul className="space-y-2 mb-4">
        {todos.map(({ inputText, completed }, index) => (
          <div key={index} className="flex items-center justify-between bg-white border border-gray-300 p-2 rounded-md shadow-sm w-1/2 mx-auto">
            <li
              onClick={() => handleTodo(index)}
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
              className="cursor-pointer flex-1"
            >
              {inputText}
            </li>
            <span
              onClick={() => handleDeleteTodo(index)}
              className="text-red-500 cursor-pointer ml-4"
            >
              X
            </span>
          </div>
        ))}
      </ul>
      <div className="flex justify-center">
        <input
          type="text"
          ref={inputRef}
          placeholder="What To Do..."
          className="border border-gray-300 p-2 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={HandleInput}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}
