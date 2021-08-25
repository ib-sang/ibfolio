import React from 'react';

// component

import CVAbout from '../cv/CVAbout';
import CVSkill from '../cv/CVSkill';
import CVWork from '../cv/CVWork';

const CVSection = () => {
    return (
        <section>
            <CVAbout/>
            <CVSkill/>
            <CVWork/>
        </section>
    )
}

export default CVSection
