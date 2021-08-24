import React, { Fragment } from 'react';

// header

import UserHead from '../components/Headers/UserHead';

// footer

import UserFoot from '../components/Footers/UserFoot';

const MainLayout = props => {
    return (
        <Fragment>
            <UserHead/>
                 <div className="main-page">
                    {props.children}
                </div>
            <UserFoot/>
        </Fragment>
    )
}

export default MainLayout
