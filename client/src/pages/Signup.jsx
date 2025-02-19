import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  username: "",
};

function reducer(state, action) {
  // switch (action.type) {
  //   case "handleEmailText":
  //     return { ...state, email: action.payload };
  //   case "handlePasswordText":
  //     return { ...state, password: action.payload };
  // }

  return { ...state, [action.field]: action.payload };
}

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, username } = state;

  // const handleEmailText = (e) => {
  //   dispatch({
  //     type: "handleEmailText",
  //     payload: e.target.value,
  //   });
  // };

  const handleText = (e) => {
    dispatch({
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      // const response = await fetch("http://localhost:5000/credentials/login)
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="p-4 flex flex-col bg-[#0F172A] w-96">
        <div className="text-[#FFFFFF] m-2 text-3xl ">Signup</div>
        <div className="text-[#FFFFFF] m-2">
          <p className="text-md mb-2 mt-2">username</p>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500 bg-[#1E293B] text-white"
            placeholder="Enter your password"
            name="username"
            value={username}
            onChange={handleText}
          />
        </div>
        <div className="text-[#FFFFFF] m-2">
          <p className="text-md mb-2 mt-2">email</p>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500 bg-[#1E293B] text-white"
            placeholder="Enter your password"
            name="email"
            value={email}
            onChange={handleText}
          />
        </div>
        <div className="text-[#FFFFFF] m-2">
          <p className="text-md mb-2 mt-2">password</p>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500 bg-[#1E293B] text-white"
            placeholder="Enter your password"
            value={password}
            onChange={handleText}
          />
        </div>
        <button className="bg-[#1E293B] text-[#38BDF8] m-2 mt-8 p-2 ">
          Login
        </button>
        <div className="flex justify-center">
          <p className="text-[#A5A5A5] text-sm m-2">
            already have an account?{" "}
            <Link to="/login" className="text-[#79CDF1]">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
