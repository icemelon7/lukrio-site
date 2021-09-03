import React from 'react';
import {ReactComponent as NotFoundLogo} from '../../assets/NotFoundLogo.svg';
import {ReactComponent as ChevronBack} from '../../assets/ionicons/chevron-back.svg';
import './NotFoundPage.styles.css';

const NotFoundPage = () => {

    return (
        <div className="not-found">
            <div className="not-found__container">
                <div className="not-found__container__header">404 Page Not Found</div>
                <div className="not-found__container__text">
                    Looks like you've followed a broken link or entered a URL that doesn't exist on our site.
                </div>
                <a href="/" className="not-found__container__return">
                    <ChevronBack stroke="red" fill="red" style={{width: '1.4vw', height: '1.4vw'}}/>
                    <div className="not-found__container__return__link">
                        Back to Lukrio Home
                    </div>
                </a>
            </div>
            <NotFoundLogo style={{width: '20vw', height: 'auto'}}/>
        </div>
    )
}

export default NotFoundPage;