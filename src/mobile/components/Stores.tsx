import React, { FunctionComponent } from 'react';
import './Stores.styles.css';
import {ReactComponent as AppleStore} from '../../assets/stores/apple.svg';
import {ReactComponent as GoogleStore} from '../../assets/stores/google.svg';

type StoresProps = {
    style?: any;
}

const Stores : FunctionComponent<StoresProps> = ({style}) => {

    return (
        <div className="stores" style={style}>
            <a href="https://appstore.com">
              <AppleStore style={{marginRight: '3vw'}} className="store-btn"/>
            </a>
            <a href="https://playstore.com">
              <GoogleStore className="store-btn"/>
            </a>
        </div>
    )
}

export default Stores;