import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useContext(AppContext);

  const formHandler = (e) => {
    e.preventDefault();
    navigate("profile");
  };
  return (
    <div className="h-screen flex justify-center ">
      <div className="h-full w-screen md:w-96 p-4 bg-[#F7F8F9] flex items-start border border-2">
        <form className="w-full" action="#" onSubmit={formHandler}>
          <div className="flex flex-col w-full mt-4">
            <h1 className="text-3xl font-semibold">
              Signin to your
              <br />
              PopX account
            </h1>
            <p className="pt-3 pb-4 text-[#74777B] font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="email"
              placeholder="Enter email address"
              type="email"
            />
            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="password"
              placeholder="Enter password"
              type="password"
            />
            <button className="p-2 mt-4 bg-[#854DFF] text-white rounded-xl font-medium hover:bg-[#6C3DDB]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
