import 'bootstrap/dist/css/bootstrap.min.css';
import './Mobile.css';
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../desktop/components/Footer';
import NavBar from '../desktop/components/NavBar';
import PrivacyPage from './legal/PrivacyPage';
import TOSPage from './legal/TOSPage';
import NotFoundPage from '../desktop/pages/NotFoundPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReferralPage from '../desktop/pages/ReferralPage';
import VisionPage from '../desktop/pages/VisionPage';
import AboutPage from './pages/AboutPage';
import RulesPage from '../desktop/support/RulesPage';
import RestrictionsPage from '../desktop/support/RestrictionsPage';
import ResponsibleGamingPage from '../desktop/support/ResponsibleGamingPage';
import HowToPlayPage from '../desktop/pages/HowToPlayPage';
import LeaguesPage from '../desktop/pages/LeaguesPage';
import LandingPage from './pages/LandingPage';

type MobileProps = {
  isBeta?: boolean;
}

const Mobile : FunctionComponent<MobileProps> = ({isBeta}) => {
  return (
    <div style={{overflowX: 'hidden'}}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <NavBar isTransparent/>}/>
        <Route path={["/analytics", "/lukrio", "/vision", "/leagues"]} render={() => <NavBar isTransparent />}/>
        <Route path="*" render={() => <NavBar isRelative/>}/>
      </Switch>
      <Switch>
        <Route exact path="/" render={() => <LandingPage isBeta={isBeta}/>}/>
        <Route exact path ="/referral" render={() => <ReferralPage isBeta={isBeta}/> }/>
        <Route exact path="/how-to-play" render={() => <HowToPlayPage/>}/>
        <Route exact path="/analytics" render={()=> <AnalyticsPage />}/>
        <Route exact path="/vision" render={() => <VisionPage/>}/>
        <Route exact path="/lukrio" render={() => <AboutPage />}/>
        <Route exact path="/leagues" render={() => <LeaguesPage />}/>
        <Route exact path="/privacy" render={() => <PrivacyPage/>}/>
        <Route exact path="/tos" render={() => <TOSPage/>}/>
        <Route exact path="/rules" render={() => <RulesPage />}/>
        <Route exact path="/restrictions" render={() => <RestrictionsPage/>}/>
        <Route exact path="/responsible-gaming" render={() => <ResponsibleGamingPage/>}/>
        <Route path="*" render={() => <NotFoundPage />}/>
      </Switch>
      <Footer isBeta={isBeta}/>
    </Router>
  </div>
  );
  /*
  
    <div className="LandingPage">
      <HeroImage></HeroImage>
      <SideBySide
      header="Gamified Investing"
      text="Prove your mettle and compete with your friends in fantasy sports for stocks. Join with entry fees as low as $1, make trades that outperform, and win cash!"
      image={GamifiedInvesting}
      ></SideBySide>

      <SideBySideFlipped
      header="Learn, Play, and Earn"
      text="With feedback tailored to your in-game decisions, become a smarter and better investor while earning money in the process."
      image={Education}
      ></SideBySideFlipped>

      <SideBySide
      header="Compete in Tournaments Large and Small"
      text="If you're ready for the big leagues, play online in public games to truly prove your skill. Follow in the footsteps of top-tier players to earn cash and show off your skills!"
      image={Tournaments}
      ></SideBySide>

      <SideBySideFlipped
      header="Discover New Ideas and Share your Progress"
      text="Maybe you have an idea you want to share with others. Or maybe you want to find the next big thing. Our community to designed to provide you with the hottest stock picks in a visual way. No more walls of text!"
      image={Social}
      ></SideBySideFlipped>
      <FeatureIconDisplay></FeatureIconDisplay>
    </div>

    */
}

export default Mobile;
