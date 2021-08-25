import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'

// component

import CVSection from '../components/CVSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>IB.Folio | About for me </title>
            </Helmet>
            <CVSection/>
        </Fragment>
        
    )
}

export default AboutPage
