//app\admin\list\EditStudent\page.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "../../../css/dash.css";
import { useSearchParams } from 'next/navigation';



interface FormData {
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

const EditStudent: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User>({
      firstname: '',
      lastname: '',
      middle_initial: '',
      age: '',
      email: '',
      gender: '',
      school: '',
      username: '',
      password: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    const searchParams = useSearchParams();
    const userId = searchParams.get('user_id');
  
    useEffect(() => {
      const fetchData = async () => {
        setError(null);
        setIsLoading(true);
  
        try {
          if (!userId) {
            throw new Error('Missing user ID in search parameters');
          }
  
          const response = await fetch(`http://localhost:8000/users/${userId}`);
  
          if (!response.ok) {
            throw new Error(await response.text());
          }
  
          const data = await response.json();
          setFormData({
            firstname: data.firstname,
            lastname: data.lastname,
            middle_initial: data.middle_initial,
            age: data.age.toString(),
            email: data.email,
            gender: data.gender,
            school: data.school,
            username: data.username,
            password: data.password,
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setIsLoading(false); // Set loading to false once data fetching is done
        }
      };
  
      fetchData();
    }, [userId]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, formData: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch(`http://localhost:8000/users/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        // Assuming successful update, you might want to handle the response accordingly
        const updatedData = await response.json();
        console.log('User updated:', updatedData);
    } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
        setIsLoading(false);
    }
};

  return (
    <div className="dash-bg">
      <div className="justify-center head pt-[120px]">
        <header className="bg-white ml-[565px] rounded-lg shadow-md p-4 w-[1090px] text-2xl">
          <title>Edit Student</title>
          Edit Student Account
        </header>
     
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
                Save Changes
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

export default EditStudent;