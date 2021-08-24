import React, { Fragment } from 'react'


// header

import UserHead from '../components/Headers/UserHead'

// Footer

import UserFoot from '../components/Footers/UserFoot'


const HomeLayout = props => {
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

export default HomeLayout
