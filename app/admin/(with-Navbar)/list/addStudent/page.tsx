//app\admin\list\addStudent\page.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../../css/dash.css";


interface FormData {
  user_id: "",
  user_type: string;
  test: string;
  firstname: string;
  lastname: string;
  middle_initial: string;
  age: string;
  email: string;
  gender: string;
  school: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const AddStudent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_id: "",
    user_type: "Student",
    test: "0",
    firstname: "",
    lastname: "",
    middle_initial: "",
    age: "",
    email: "",
    gender: "Male",
    school: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sucessMessage, setSucessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Registration successful");
      setSucessMessage("Registration successful");
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage("Error registering user");
    }
  };

  return (
    <div className="dash-bg">
      <div className="justify-center head pt-[120px]">
        <header className="bg-white ml-[565px] rounded-lg shadow-md p-4 w-[1090px] text-2xl">
          <title>Add Student</title>
          Add Student Account
        </header>
        {errorMessage && (
          <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert" key="error-message">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{errorMessage}</p>
          </div>
        )}

        {sucessMessage && (
          <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert" key="error-message">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{sucessMessage}</p>
          </div>
        )}

    <div className="flex justify-center items-center p-[20px]">
    <div className="bg-white rounded-lg bg-opacity-50">

        {/* Centering container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left column */}
          <div className="relative bg-[#13DFFE] rounded-lg m-1 p-10 flex flex-col justify-center items-center">
            {/* Left Column Content */}
            <img
              src="/student.png"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 h-[300px] "
              alt="Centered image"
            />
            <label className="block mt-[70px]">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                // onChange={loadFile}
                className="block w-full text-sm shadow-md rounded-full text-black-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#A1E67D] file:text-black-700
                hover:file:bg-white"
              />
            </label>
          </div>

          {/* Right column */}
          <div className="bg-white bg-opacity-0  p-4 rounded-lg ">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                  
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/1 px-3 ">
                  <label
                    className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name "
                  >
                    Last Name
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-M-name"
                  >
                    Middle Initial
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="middle_initial"
                    placeholder="M.I"
                    value={formData.middle_initial}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 pt-3 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-age ">
                    Age
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="age"
                    placeholder="0"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="a@a.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block shadow-md appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="w-full md:w-1/1 px-3 pt-3">
                  <label
                    className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-school"
                  >
                    School
                  </label>
                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="school"
                    placeholder="University of Makati"
                    value={formData.school}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-school-id"
                  >
                    School ID
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="username"
                    placeholder="Enter school ID"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="confirmPassword"
                    id="grid-confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="bg-[#6FD03D] hover:bg-blue-700   shadow-md text-white font-bold py-2 px-4 rounded-[10px] pr-[100px] pl-[100px]">
                Create Student Account
              </button>
              {/* Additional form fields go here */}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddStudent;