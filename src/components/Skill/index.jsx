import React from 'react';

// component

import ProgressBar from '../ProgressBar';

const Skill = () => {
    return (
        <div className="skill">
            <div className="skill-desc">
                <h2 className="skill-title">The skills required during my studies.</h2>
                <p className="skill-para">
                    Computer enthusiast , in general new technologies, this allowed me to know 
                    several programming languages and   finally to know how to create web and
                    mobile applications.
                </p>
            </div>
            <div className="skill-level">
                <div className="skill-mov">
                    <div className="skill-wrap">
                        <h1 className="skill-level-title">My Skill</h1>
                        <ProgressBar name="Web/Mobile Development" level="85" />
                        <ProgressBar name="Network Infrastructure" level="73" />
                        <ProgressBar name="Big Data" level="94" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
