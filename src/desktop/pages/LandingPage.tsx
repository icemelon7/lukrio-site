import 'bootstrap/dist/css/bootstrap.min.css';
import { FunctionComponent, useRef } from 'react';
import Podium from '../../assets/podium.png';
import '../App.css';
import HeroImage from '../HeroImage';
import SideBySideHome from '../SideBySideHome';
import Analytics from '../views/Analytics';
import FeatureIconDisplay from '../views/FeatureIcon';
import Features from '../views/Features';

type LandingPageProps = {
  isBeta?: boolean;
}

const LandingPage : FunctionComponent<LandingPageProps> = ({isBeta}) => {
    const demoRef = useRef();
    const detailsRef = useRef();
    return (
        <div className="LandingPage">
          <HeroImage isBeta={isBeta} demoRef={demoRef} detailsRef={detailsRef} />
          {//<SignupSideBySide demoRef={demoRef}/>
          }
          <SideBySideHome
          detailsRef={detailsRef}
          header="How To Play?"
          image={Podium}
          responsiveImage
          ></SideBySideHome>
          <FeatureIconDisplay/>
          <Analytics moreLink />
          <Features moreLink />
        </div>
  );
}

export default LandingPage;