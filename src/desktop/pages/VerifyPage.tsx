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
    const [status, setStatus] = useState<number>(100);
    
    useEffect(() => {
        _verify();
    }, [])

    const _verify = async () => {
        if (!TOTPCode || !username) {
            window.location.href = "/404"
        } else {
            let result = await verifyUsingCode(TOTPCode, username);
            setStatus(result);
        }
    }

    return (
        <div className="verify">
            {
                status === 200 || status === 201 ? 
                <Splash
                mobileDisplay={window.innerWidth < 1024}
                header="📧 Email Verified! "
                subheader={"Thank you! 🥳"}
                text={
                    
                    status === 200 ? 
                    <div className="verify__text">
                        <Row emoji="💎" text="We match up to $20 of your first deposit!" delay={100}/>
                        <Row emoji="🚀" text={<Redirect fontSize={'1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontSize: '0.6em !important', fontWeight: '500'}} text="Learn more about how to play" url="/how-to-play"/>} delay={200}/>
                        
                        <Row emoji="🤝" text={<Redirect fontSize={'1.3vw'} style={{color: 'white', fontStyle: 'italic', position: 'relative', marginLeft: '3vw', fontSize: '0.6em !important', fontWeight: '500'}} text="Refer your friends and get free $5 to play" url="/referral"/>} delay={300}/>
                    </div> : "Free $5 Student Starting Balance Applied"
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
                subheader={`${status}`}
                text=""
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