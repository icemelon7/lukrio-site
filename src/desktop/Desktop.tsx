import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage';
import PrivacyPage from './legal/PrivacyPage';
import TOSPage from './legal/TOSPage';

function Desktop() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" render={() => <LandingPage/>}/>
        <Route exact path="/privacy" render={() => <PrivacyPage/>}/>
        <Route exact path="/tos" render={() => <TOSPage/>}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default Desktop;
