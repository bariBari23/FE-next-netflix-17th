import Image from 'next/image'
import Logo from './components/Lottie/NetflixLogo';
import { useQuery } from 'react-query';
import { MovieApi } from './lib/api';


function Home() {
  return (
    <div>
      <Logo/>
    </div>
  );
}


export default Home;