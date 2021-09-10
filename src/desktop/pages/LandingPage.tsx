import 'bootstrap/dist/css/bootstrap.min.css';
import { FunctionComponent, useEffect, useRef } from 'react';
import Podium from '../../assets/podium.png';
import '../App.css';
import HeroImage from '../HeroImage';
import SideBySideHome from '../SideBySideHome';
import Analytics from '../views/Analytics';
import FeatureIconDisplay from '../views/FeatureIcon';
import Features from '../views/Features';
import LandingBackground from '../components/LandingBackground';
import { useCookies } from 'react-cookie';

type LandingPageProps = {
  isBeta?: boolean;
}

const LandingPage : FunctionComponent<LandingPageProps> = ({isBeta}) => {
    const demoRef = useRef();
    const detailsRef = useRef();
    let params = new URLSearchParams(window.location.search);
    let refId = params.get('ref') as string;
    const [cookies, setCookie, removeCookie] = useCookies(['refId']);
    useEffect(() => {
      if (refId) {
        setCookie('refId', refId, {expires: new Date(2030, 1, 1)});
      } else {
        removeCookie('refId');
      }
    }, []);
    if (window.innerWidth < 1024) {
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <LandingBackground isBeta={isBeta}/>
          <SideBySideHome
          header="How To Play?"
          responsiveImage
          ></SideBySideHome>
          <FeatureIconDisplay/>
          <Analytics moreLink />
          <Features moreLink />
        </div>
      )
    } else {
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
    
}

export default LandingPage;