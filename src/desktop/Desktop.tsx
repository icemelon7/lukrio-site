import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FunctionComponent, useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import PrivacyPage from './legal/PrivacyPage';
import TOSPage from './legal/TOSPage';
import NotFoundPage from './pages/NotFoundPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReferralPage from './pages/ReferralPage';
import VisionPage from './pages/VisionPage';
import AboutPage from './pages/AboutPage';
import RulesPage from './support/RulesPage';
import RestrictionsPage from './support/RestrictionsPage';
import ResponsibleGamingPage from './support/ResponsibleGamingPage';
import HowToPlayPage from './pages/HowToPlayPage';
import LeaguesPage from './pages/LeaguesPage';
import TripleMockup from './components/mockupComponents/TripleMockup';
import Lobby from '../assets/mockups/lobby.png';
import Chart from '../assets/mockups/stockCandleChart.png';
import PortfolioChart from '../assets/mockups/portfolioChart.png';
import RouteChangeTracker from '../RouteChangeTracker';

type DesktopProps = {
  isBeta?: boolean;
}

const Desktop : FunctionComponent<DesktopProps> = ({isBeta}) => {

  useEffect(() => {
    ReactGA.pageview('/');
    ReactGA.event({
      category: "Visit",
      action: "Desktop"
    });
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <NavBar isRelative isTransparent/>}/>
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
          <Route exact path="/tou" render={() => <TOSPage/>}/>
          <Route exact path="/rules" render={() => <RulesPage />}/>
          <Route exact path="/restrictions" render={() => <RestrictionsPage/>}/>
          <Route exact path="/responsible-gaming" render={() => <ResponsibleGamingPage/>}/>
          {//<Route exact path="/graphic" render={() => <TripleMockup graphic firstMock={Lobby} secondMock={Chart} thirdMock={PortfolioChart} firstMockIcon="🕹️" secondMockIcon="🚀" thirdMockIcon="👑"/>}/>
          }
          <Route path="*" render={() => <NotFoundPage />}/>
        </Switch>
        <Footer isBeta={isBeta}/>
        <RouteChangeTracker />
      </Router>
    </div>
    
  );
}

export default Desktop;
