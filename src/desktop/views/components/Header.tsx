import React, { FunctionComponent } from 'react';
import './Header.styles.css';
import {ReactComponent as CaretDown} from '../../../assets/ionicons/caret-down.svg';
import {ReactComponent as CaretUp} from '../../../assets/ionicons/caret-up.svg';
import { LightMode } from '../../../Colors';

type HeaderProps = {
    text: string;
    style: any;
    isSortDown: boolean;
    sortCol: string;
    handle: any;
}

const Header : FunctionComponent<HeaderProps> = ({text, style, isSortDown, sortCol, handle}) => {

    return (
        <div style={style} className="analytics-header" onClick={() => handle(text)}>
            <div className="analytics-header__title">{text}</div>
            <div className="analytics-header__sort">
            {
            sortCol === text ?
            isSortDown ?
            <CaretDown style={{width: '10px', height: '10px', objectFit: 'contain', color: LightMode.darkGrey}}/>
            :
            <CaretUp style={{width: '10px', height: '10px', objectFit: 'contain', color: LightMode.darkGrey}}/>
            :
            <>
                <CaretDown style={{width: '10px', height: '10px', objectFit: 'contain', color: LightMode.darkGrey}}/>
                <CaretUp style={{width: '10px', height: '10px', objectFit: 'contain', color: LightMode.darkGrey}}/>
            </>
            }
            </div>
        </div>
    )
}

export default Header;