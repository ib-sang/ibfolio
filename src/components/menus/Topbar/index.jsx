import React from 'react';
import Icon from '../../Icon';

const Topbar = () => {
    return (
        <div className="topbar wrapper container">

            <div className="topbar-item">
                <Icon name="map-google"/> Yirmadjo pres du 26 Mars
            </div>

            <div className="topbar-wrap">
                <div>
                    <Icon name="envelop" /> sibrahima250@gmail.com
                </div>
                <div>
                    <Icon name="phone" />+ (223) 91 92 32 37
                </div>
            </div>

        </div>
    )
}

export default Topbar
