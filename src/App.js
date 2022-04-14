import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();

  console.log(username, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    console.log(usernameRef.current.value, passwordRef.current.value);
  };
  return (
    <div className="w-screen h-screen bg-yellow-400 flex justify-center items-center">
      <form className="h-[400px] w-[400px] bg-gray-200 rounded shadow- flex flex-col px-10 gap-10 py-6">
        <div className="place-self-center">
          <h1 className="text-2xl font-bold text-gray-700">Test Login</h1>
          <small className="text-xs italic font-light text-gray-700">
            just texting this out
          </small>
        </div>

        <div>
          <label>Email/Username:</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full h-10 outline-none border-b-2 rounded shadow border-emerald-700 bg-white px-5"
            // onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            required
            className="w-full h-10 outline-none border-b-2 rounded shadow border-emerald-700 bg-white px-5"
            // onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </div>

        <button
          className="w-full h-14 text-center text-white font-bold bg-emerald-600 hover:bg-emerald-700"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
