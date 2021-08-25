import React from 'react'


// component

import CVHead from '../CVHead'
import Icon from '../../Icon'
import ProgressBar from '../../ProgressBar'

const CVSkill = () => {

    return (
        <div className="CVSkill">
            <CVHead title="My skill" icon="valided" />
            <div className="skill-items">
                <div className="skill-item">
                    <Icon name="web"/>
                </div>
                <div className="si-icon">
                    <ProgressBar name="Development" level="84"/>
                </div>
            </div>

            <div className="skill-middle">
                <div className="si-icon">
                    <ProgressBar name="Data & Artificie Inteligence" level="84"/>
                </div>
                
                <div className="skill-item">
                    <Icon name="data"/>
                </div>
            </div>

            <div className="skill-items">
                <div className="skill-item">
                    <Icon name="network"/>
                </div>
                <div className="si-icon">
                    <ProgressBar name="Network Infrastructure" level="84"/>
                </div>
            </div>

        </div>
    )
}

export default CVSkill
