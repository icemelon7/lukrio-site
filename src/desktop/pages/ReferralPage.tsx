import React from 'react';
import Splash from '../components/Splash';
import {ReactComponent as CompetitiveSplash} from '../../assets/splashIcons/competitively.svg';
import { LightMode } from '../../Colors';

const ReferralPage = () => {

    return (
        <div className="referral">
            <Splash 
            header="Start Investing with Lukrio, "
            subheader="Competitively"
            text={
            <>
                <p style={{fontSize: '2.5vw', marginTop: '3vh'}}>Beat <span style={{color: LightMode.teal}}>Others</span>, not the <span style={{color: LightMode.darkBlue}}>Market.</span></p>
                <p>Start now with a <span style={{color: LightMode.teal}}>$5 free starting balance*</span> and an <span style={{color: LightMode.darkBlue}}>additional free $5</span> for each friend you refer**.</p>
                <p>We will match your <span style={{color: LightMode.teal}}>first deposit up to $20!</span></p>
            </>
            }
            marginRight="0vw"
            leftWidth="40vw"
            right={<CompetitiveSplash style={{width: '35vw', height: '70vh', zoom: 1, objectFit: 'cover'}}/>}
            disclaimer={
                <div className="disclaimer">
                *, ** Free starting balance and free referral bonuses requires verified email ending in .edu (e.g. joe@school.edu).
                </div>
            }
            />
        </div>
    )
}

export default ReferralPage;