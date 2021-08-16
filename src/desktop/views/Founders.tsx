import React from 'react';
import FounderBlock from './components/FounderBlock';
import './Founders.styles.css';
import RaymondMason from '../../assets/team/raymondMason.jpg';


const Founders = () => {

    return (
        <div className="founders">
            <FounderBlock 
            name="Raymond Mason"
            title="Co-Founder (CEO/CTO)"
            image={RaymondMason}
            text="Raymond is a passionate investor who started his investing journey at Wharton. Hearing fellow students discuss their portfolio returns, Raymond set out to build a platform to allow them to compete and learn from each other. Working in financial services, Raymond knows the frustration of being restricted. With Lukrio, you can still practice investing and make money beating others, not the market."
            />
            <FounderBlock 
            name="Jerry Xiang"
            title="Co-Founder (CMO/CFO)"
            image={<div />}
            text=""
            />
            <FounderBlock 
            name="Christopher Lee"
            title="Co-Founder (CDO)"
            image={<div />}
            text=""
            />
        </div>
    )
}

export default Founders;