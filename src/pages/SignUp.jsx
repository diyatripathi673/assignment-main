import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");

  const { navigate } = useContext(AppContext);

  const formHandler = (e) => {
    e.preventDefault();
    navigate("profile");
  };
  return (
    <div className="h-screen  flex justify-center ">
      <div className="h-full w-screen md:w-96 p-4 bg-[#F7F8F9] flex items-start border border-2">
        <form
          className="h-full w-full flex flex-col justify-between"
          action="#"
          onSubmit={formHandler}
        >
          <div className="flex flex-col w-full mt-4">
            <h1 className="text-3xl font-semibold w-full">
              Create your
              <br />
              PopX account
            </h1>

            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              className="p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="fullName"
              placeholder="Enter FullName"
              type="text"
            />

            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              type="text"
            />

            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="email"
              placeholder="Enter Email Address"
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
              placeholder="Enter Password"
              type="password"
            />

            <label
              className="text-sm ml-2 mt-2 mb-1 text-[#6C25FF] font-semibold"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              className="p-2 outline-none bg-transparent border-2 border-gray-370 rounded-xl"
              id="companyName"
              placeholder="Enter Company Name"
              type="text"
            />

            <p className="mt-2 mb-2 ml-2">Are you an Agency?</p>
            <div className="flex gap-3 ml-2 ">
              <label className="">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="mr-2 border scale-125 accent-[#6C25FF]"
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="mr-2 border scale-125 accent-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>
          <button className="p-2 mt-4 bg-[#6C25FF] text-white rounded-xl font-medium hover:bg-[#6e25ffcc] mb-3">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
