import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', _handleResize);
    return () => {
      window.removeEventListener('resize', _handleResize);
    }
  });

  const _handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  }

  if (width >= 500) {
    return <Desktop />
  } else {
    return <Mobile />
  }
}

export default App;
