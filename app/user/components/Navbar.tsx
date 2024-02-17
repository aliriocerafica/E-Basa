import Link from 'next/link';
import Image from 'next/image';
import "../styles/homepage.css";

const Navbar = () => {

  return (
    <>

      <div className="topnav">
        <Link href="/home">
       
            <Image src="/nav-logo.png" alt="Home" width={200} height={100} />
        
        </Link>

      

        <Link href="">
          
            <div className="user-search-container">
              <div className="search-bar">
                <input type="text" id="search-input" />
                <Image src="/search-logo.png" id="search-button" alt="Search" width={40} height={40} />
              </div>
            </div>
        </Link>

        <Link href="/Ranks">
       
       <Image src="/trophy.png" alt="trophy" id="trophy-image" width={160} height={100} />
   
   </Link>

        <Link href="/profile">
         
            <Image src="/user-icon.png" alt="user-icon" width={110} height={100} />
    
        </Link>
      </div>
    </>
  );
}

export default Navbar;
