
import Link from 'next/link';
import Image from 'next/image';

const Sidenav = () => {
  
  return (
    <div className="sidenav">
       <Link href="/quiz">
        <Image src="/menubt.png" id="menubt-image" width={100} height={100} alt={''} />
      </Link>
      <Link href="/home">
        <Image src="/homebt.png" id="homebt-image" width={100} height={100} alt={''} />
      </Link>
      <Image src="/soundbt.png" id="soundbt-image" width={100} height={100} alt={''} />
      <Image src="/settingbt.png" id="settingbt-image" width={100} height={100} alt={''} />
   
    </div>
  );
}

export default Sidenav;
