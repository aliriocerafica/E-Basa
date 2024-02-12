import Image from "next/image";
import "../styles/login.css"; // Import the CSS file

export default function Home() {
  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <main>
      <div className='loginbot'>
      <Image src="/loginbot.png" alt="bot" width={1367} height={200}/>
    </div>
    <div className='loginbg' >
        <div className="clouds overflow-hide">
          <Image src="/clouds1.png" alt="Clouds" width={1500} height={350} />
        </div>
        <Image
          src="/nav-logo.png"
          alt="Centered Image"
          className="centered-image"
          width={200}
          height={100}
        />
        <div className="login-container">
          <input
            type="text"
            id="username"
            placeholder="Numero ng ID"
            name="username"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />
          <button type="button" >
            MAG LOG IN
          </button>
        </div>
      </div>
    </main>
  );
}
