'use client';
import Image from "next/image";
import { useState } from "react";
import "./styles/login.css"; // Import the CSS file

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
  
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
  
      if (response.ok) {
        // Login successful, redirect or show success message
        console.log("Login successful");
      } else {
        // Login failed, handle error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };  

  return (
    <main>
      <div className='loginbot'>
        <Image src="/loginbot.png" alt="bot" layout="responsive" width={1367} height={200}/>
      </div>
      <div className='loginbg' >
        <div className="clouds overflow-hide" >
          <Image src="/clouds1.png" alt="Clouds"  width={2500} height={650} />
        </div>
        <Image
          src="/nav-logo.png"
          alt="Centered Image"
          className="centered-image"
          width={200}
          height={100}
        />
        <div className="login-container" >
          <input
            type="text"
            id="username"
            placeholder="Numero ng ID"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={handleLogin}>
            MAG LOG IN
          </button>
        </div>
      </div>
    </main>
  );
}