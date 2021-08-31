import React, { FunctionComponent } from 'react';
import LandingBackground from '../components/LandingBackground';
import SideBySideHome from '../SideBySideHome';
import Analytics from '../views/Analytics';
import FeatureIconDisplay from '../views/FeatureIcon';
import Features from '../views/Features';
import './LandingPage.styles.css';

type LandingPageProps = {
    isBeta?: boolean;
}

const LandingPage:FunctionComponent<LandingPageProps> = ({isBeta}) => {

    return (
        <div className="landing-page">
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
}

export default LandingPage;