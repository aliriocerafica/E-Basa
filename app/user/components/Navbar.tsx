import Link from 'next/link';
import Image from 'next/image';
import "../styles/homepage.css";

const Navbar = () => {

  return (
    <>
      <Image src='/whitebar.png' alt='bar' id='whitebar' width={100} height={50} />

      <div className="topnav">
        <Link href="/home">
       
            <Image src="/nav-logo.png" alt="Home" width={230} height={115} />
        
        </Link>

        <Link href="/Ranks">
       
            <Image src="/trophy.png" alt="trophy" id="trophy-image" width={160} height={100} />
        
        </Link>

        <Link href="/home">
          
            <div className="user-search-container">
              <div className="search-bar">
                <input type="text" id="search-input" />
                <Image src="/search-logo.png" id="search-button" alt="Search" width={50} height={50} />
              </div>
            </div>
     
        </Link>

        <Link href="/profile">
         
            <Image src="/user-icon.png" alt="user-icon" width={130} height={115} />
    
        </Link>
      </div>
    </>
  );
}

export default Navbar;
