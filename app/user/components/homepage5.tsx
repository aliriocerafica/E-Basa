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
        <Link href="/homepage4">
         
            <Image src='/prev.png' id='prev-image' width={130} height={200}  alt={''} />
         
        </Link>
        <div>
          <Image src="/aralin.png" className='gamebt' id='aralin-image' width={200} height={200} alt={''} />
          <Image src="/aralin2.png" className="aralin" alt="AralinImage" width={1000} height={1000} />
        </div>
        <div>
          <Image src="/pagsusulit.png"  className='gamebt' id='pagsusulit-image' width={200} height={200} alt={''} />
          <Image src="/pagsusulit2.png" className="pagsusulit" alt="PagsusulitImage" width={1000} height={200} />
        </div>
        <Link href="/homepage1">
         
            <Image src='/next.png' id='next-image'  width={130} height={200} alt={''} />
          
        </Link>
      </div>
      <Image src='/lvl5.png' id='level-image' width={1000} height={100} alt={''} />
    </>
  );
}
