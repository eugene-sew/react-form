import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [isactive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [valHere, setValHer] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      setTodos(res.data);

      // console.log(todos);
    });
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    axios.post("http://localhost:5000/create", { description }).then((res) => {
      console.log("added todo");
    });
    setDescription("");
  };

  const add = (e) => {
    e.preventDefault();
    setValHer((valHere += 1));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      console.log("deleted todo");
    });
  };
  return (
    <div className="h-screen w-screen bg-sky-500 flex flex-col justify-center items-center">
      <form>
        <h1>My To Do List</h1>
        <div className="flex flex-row">
          <input
            type="text"
            className="w-full h-10 outline-none border-b-2 border-blue-600 rounded-l shadow-lg bg-white text-gray-400 font-bold px-5 py-4"
            placeholder="What am I doing today"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
          <button
            className="bg-green-400 text-white rounded-r"
            onClick={(e) => handleSubmit(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>

          {/* {isactive && (
            <button
              className="bg-sky-400 text-white rounded-r"
              onClick={(e) => handleSubmit(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </button>
          )} */}
        </div>
      </form>

      <ul className="bg-white rounded shadow w-[400px] h-[400px] overflow-hidden overflow-y-scroll px-5 py-10 flex flex-col gap-5">
        {todos.map((todo) => (
          <li
            className=" bg-white rounded shadow-lg w-full cursor-pointer grid grid-cols-12 text-center"
            key={todo.id}
            // onClick={(e) => {
            //   setDescription(e.target.innerText);
            //   setIsActive(!isactive);
            // }}
          >
            <h1 className="col-span-10 grid place-content-center">
              {todo.description}
            </h1>
            <button
              className="bg-red-600 text-white text-base p-2 col-span-2"
              onClick={(e) => handleDelete(e, todo.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </li>
        ))}

        <button
          className="bg-green-400 text-white rounded-r"
          onClick={() => setIsMounted(true)}
        >
          Mount
        </button>
        <button
          className="bg-red-400 text-white rounded-r"
          onClick={() => setIsMounted(false)}
        >
          Unmount
        </button>
        {isMounted && (
          <>
            {" "}
            <div className="text-3xl text-black">{valHere}</div>
            <button
              className="bg-orange-400 text-white rounded-r"
              onClick={() => setValHer(valHere + 1)}
            >
              Add
            </button>
          </>
        )}
      </ul>
    </div>
  );
}

export default App;
