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

function Desktop() {

  return (
    <div style={{overflowX: 'hidden'}}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <NavBar isRelative isTransparent/>}/>
          <Route path="/about/*" render={() => <NavBar isTransparent />}/>
          <Route path="*" render={() => <NavBar isRelative/>}/>
        </Switch>
        <Switch>
          <Route exact path="/" render={() => <LandingPage/>}/>
          <Route exact path="/about/analytics" render={()=> <AnalyticsPage />}/>
          <Route exact path ="/referral" render={() => <ReferralPage/> }/>
          <Route exact path="/privacy" render={() => <PrivacyPage/>}/>
          <Route exact path="/tos" render={() => <TOSPage/>}/>
          <Route path="*" render={() => <NotFoundPage />}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default Desktop;
