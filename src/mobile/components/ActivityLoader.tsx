import React, { FunctionComponent } from 'react';
import Lottie from 'react-lottie';
import digitalFinance from '../../assets/lottie/digitalFinance.json';

type ActivityLoaderProps = {
    width?: number;
    height?: number;
}

export const ActivityLoader1 : FunctionComponent<ActivityLoaderProps> = ({width, height}) => {

    return (
        <Lottie
        options={{
            loop: true,
            autoplay: true,
            animationData: digitalFinance,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
        }}
        height={height ?? '100%'}
        width={width ?? '100%'}
        />
    )
}