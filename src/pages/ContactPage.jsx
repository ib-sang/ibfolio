import React, { Fragment } from 'react'

// component

import SectionContact from '../components/SectionContact';
import ContactPerson from '../components/ContactPerson';
const ContactPage = () => {
    return (
        <Fragment>
            <ContactPerson/>
            <SectionContact/>
        </Fragment>
        
    )
}

export default ContactPage
