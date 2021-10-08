import React, { FunctionComponent, useEffect, useState } from 'react';
import { verifyUsingCode } from '../../fetchers/verify';
import "./VerifyPage.styles.css";
import Splash from '../components/Splash';
import MockupPhone from '../components/mockupComponents/MockupPhone';
import HomeMockup from '../../assets/LiquidSwipe.MP4';
import TripleMockupCycle from '../components/TripleMockupCycle';
import { Row } from './HowToPlayPage';
import Redirect from '../components/Redirect';

const VerifyPage : FunctionComponent<{}> = () => {

    let params = new URLSearchParams(window.location.search);
    let TOTPCode = params.get('code') as string;
    let username = params.get('username') as string;
    const [status, setStatus] = useState<number>(403);
    
    useEffect(() => {
        _verify();
    }, [])

    const _verify = async () => {
        if (!TOTPCode || !username) {
            window.location.href = "/404"
        } else {
            let result = await verifyUsingCode(TOTPCode, username);
            console.log(result);
            setStatus(result);
            console.log(TOTPCode, username);
        }
    }

    return (
        <div className="verify">
            {
                status === 100 ?
                "Trying to verify your email"
                :
                status === 200 || status === 201 ? 
                <Splash
                mobileDisplay={window.innerWidth < 1024}
                header="📧 Email Verified! "
                subheader={"Thank you! 🥳"}
                text={
                    status === 200 ? 
                    <div className="verify__text">
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="💎" text="We match up to $20 of your first deposit!" delay={100}/>
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="🚀" text={<Redirect fontSize={window.innerWidth < 1024 ? '7vw' : '1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontWeight: '500'}} text="Learn more about how to play" url="/how-to-play"/>} delay={300}/>
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="🤝" text={<Redirect fontSize={window.innerWidth < 1024 ? '7vw' : '1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontWeight: '500'}} text="Refer your friends and get free $5 to play" url="/referral"/>} delay={300}/>
                    </div>
                    : 
                    <div className="verify__text">
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="💎" text="Free $5 Starting Balance Applied!" delay={100}/>
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="🚀" text={<Redirect fontSize={window.innerWidth < 1024 ? '7vw' : '1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontWeight: '500'}} text="Learn more about how to play" url="/how-to-play"/>} delay={300}/>
                        <Row fontSize={window.innerWidth < 1024 ? '7vw' : undefined} emoji="🤝" text={<Redirect fontSize={window.innerWidth < 1024 ? '7vw' : '1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontWeight: '500'}} text="Refer your friends and get free $5 to play" url="/referral"/>} delay={300}/>
                    </div>
                }
                right={<TripleMockupCycle/>
                }
                leftWidth="60vw"
                marginRight="1vw"
                >
                </Splash>
                :
                <Splash
                mobileDisplay={window.innerWidth < 1024}
                header="Whoops, something went wrong... "
                subheader={``}
                text={
                    status === 403 ? 
                    `Hmm...Verification Code ${TOTPCode} incorrect`
                    :
                    status === 404 ?
                    `Hmm...Could not find user with username: ${username}`
                    :
                    status === 409 ?
                    `User is already verified`
                    :
                    `Internal Server Error...Try again later`
                }
                right={<TripleMockupCycle/>
                }
                leftWidth="60vw"
                marginRight="1vw"
                >
                </Splash>
            }
        </div>
    )
}

export default VerifyPage;