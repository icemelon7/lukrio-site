import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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

function Desktop() {

  return (
    <div style={{overflowX: 'hidden'}}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <NavBar isRelative isTransparent/>}/>
          <Route path={["/about/analytics", "/about/lukrio", "/about/vision", "/about/leagues"]} render={() => <NavBar isTransparent />}/>
          <Route path="*" render={() => <NavBar isRelative/>}/>
        </Switch>
        <Switch>
          <Route exact path="/" render={() => <LandingPage/>}/>
          <Route exact path ="/referral" render={() => <ReferralPage/> }/>
          <Route exact path="/about/how-to-play" render={() => <HowToPlayPage/>}/>
          <Route exact path="/about/analytics" render={()=> <AnalyticsPage />}/>
          <Route exact path="/about/vision" render={() => <VisionPage/>}/>
          <Route exact path="/about/lukrio" render={() => <AboutPage />}/>
          <Route exact path="/about/leagues" render={() => <LeaguesPage />}/>
          <Route exact path="/privacy" render={() => <PrivacyPage/>}/>
          <Route exact path="/tos" render={() => <TOSPage/>}/>
          <Route exact path="/support/rules" render={() => <RulesPage />}/>
          <Route exact path="/support/restrictions" render={() => <RestrictionsPage/>}/>
          <Route exact path="/support/responsible-gaming" render={() => <ResponsibleGamingPage/>}/>
          <Route path="*" render={() => <NotFoundPage />}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default Desktop;
