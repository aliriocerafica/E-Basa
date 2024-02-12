import Link from 'next/link';
import Image from 'next/image';
import "../styles/homepage.css";
import Navbar from '../components/Navbar';
import SideNav from '../components/sidenav';

export default function Home() {

  const handleMenuClick = (menu: string) => {

  };

  return (
    <>
    <div>
      <Navbar />
      <SideNav />
    </div>
      <div className='home-carousel'>
        <Link href="/home5">
         
            <Image src='/prev.png' id='prev-image' width={160} height={190}  alt={''} />
         
        </Link>
        <div>
          <Image src="/aralin.png" className='gamebt' id='aralin-image' width={200} height={200} alt={''} />
          <Image src="/aralin1.png" className="aralin" alt="AralinImage" width={200} height={200} />
        </div>
        <div>
          <Image src="/pagsusulit.png" className='gamebt' id='pagsusulit-image' width={200} height={200} alt={''} />
          <Image src="/pagsusulit1.png" className="pagsusulit" alt="PagsusulitImage" width={200} height={200} />
        </div>
        <Link href="/Home2">
         
            <Image src='/next.png' id='next-image' width={160} height={190} alt={''} />
          
        </Link>
      </div>
      <Image src='/lvl1.png' id='level-image' width={1250} height={110} alt={''} />
    </>
  );
}
