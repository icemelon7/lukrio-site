import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';
import {CookiesProvider} from 'react-cookie';
import "@fontsource/dm-sans";

ReactGA.initialize('UA-208931914-1');

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', _handleResize);
    return () => {
      window.removeEventListener('resize', _handleResize);
    }
  });

  // Show Apple/Google Play or beta
  const isBeta = true;

  const _handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  }
  return <div/>
  if (width >= 1024) {
    return <CookiesProvider><Desktop isBeta={isBeta} /></CookiesProvider>
  } else {
  return <CookiesProvider><Mobile isBeta={isBeta} /></CookiesProvider>
  }
}

export default App;
