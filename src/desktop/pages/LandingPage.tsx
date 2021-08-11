import { useRef } from 'react';
import Podium from '../../assets/podium.png'; 
import Rocket from '../../assets/rocket.png';
import FeatureIconDisplay from '../views/FeatureIcon';
import HeroImage from '../HeroImage';
import SideBySide from '../SideBySide';
import SideBySideHome from '../SideBySideHome';
import SideBySideFlipped from '../SideBySideFlipped';
import SignupSideBySide from '../SignupSideBySide';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Analytics from '../views/Analytics';

const LandingPage = () => {
    const demoRef = useRef();
    const detailsRef = useRef();
    return (
        <div className="LandingPage">
          <HeroImage demoRef={demoRef} detailsRef={detailsRef}/>
          {//<SignupSideBySide demoRef={demoRef}/>
          }
          <SideBySideHome
          detailsRef={detailsRef}
          header="How To Play?"
          image={Podium}
          ></SideBySideHome>
          <FeatureIconDisplay/>
          <Analytics moreLink />
        </div>
  );
}

export default LandingPage;