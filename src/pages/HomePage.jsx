import React, { Fragment } from 'react'

// component

import HomeBanner from '../components/banner/HomeBanner';
import Skill from '../components/Skill';
import SelectionProject from '../components/SelectionProject';
import SectionForm from '../components/SectionForm';

const HomePage = () => {
    return (
        <Fragment>
            <HomeBanner/>
            <Skill/>
            <SelectionProject/>
            <SectionForm/>
        </Fragment>
    )
}

export default HomePage
