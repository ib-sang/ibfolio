import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

// component

import SectionContact from '../components/SectionContact';
import ContactPerson from '../components/ContactPerson';

const ContactPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>IB.Folio | Contact me </title>
            </Helmet>
            <ContactPerson/>
            <SectionContact/>
        </Fragment>
        
    )
}

export default ContactPage
