"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./css/quiz.css";
interface FormData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user_id", data.user_id);

      console.log("Login successful", data);

      const test = data.test;

      if (test == 0) {
        router.push("/user/mag-simula");
      }
      if (test == 1) {
        router.push("/user/home");
      }
    } catch (error) {
      console.error("Login failed", error);
      // Handle login error, e.g., display error message to the user
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url('/loginbg2.png')` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="logo">
          <img
            src="/userlogo.png"
            alt="Logo"
            className="w-[702px] h-[260px] animate-bounce"
          />
        </div>
        <div className="max-w-md mx-auto dark:bg-transparent bg-opacity-25 rounded-lg p-8">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Numero ng ID"
                  className="text-black w-96 h-[46px] px-3 font-bold text-[18px] py-2 placeholder-black rounded-full focus:outline-none focus:ring dark:placeholder-black dark:border-white-600 dark:focus:ring-gray-900
                   dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2"></div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-black w-96 h-[46px] px-3 font-bold text-[18px] py-2 placeholder-black rounded-full focus:outline-none focus:ring dark:placeholder-black dark:border-white-600 dark:focus:ring-gray-900
                   dark:focus:border-gray-500"
                />
                {/* <div className="show mt-2 ml-2 ">
                  <button> Ipakita ang Password </button>
                </div> */}
              </div>
              <div className="mb-6 font-sans ">
                <button
                  type="submit"
                  className="w-full text-[26px]  font-bold font-inter px-2 py-2 text-white bg-[#00DAFF] rounded-full focus:bg-[#67E9FF] focus:outline-none shadow-md"
                >
                  Mag Log-in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
