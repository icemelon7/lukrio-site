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
            text="Raymond is a passionate investor who started his investing journey at Wharton. Coming from an engineering background, "
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