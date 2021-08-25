import React from 'react';

// component

import Icon from '../../Icon';

const CVHead = ({title, icon}) => {
    return (
        <div className="cv_head">
            <h2 className="cvh-title">{title && (title) }</h2>
            <div className="cvh-icons">
                <div className="cvh-bar"></div>
                <div className="cvh-icon">
                    <Icon name={icon &&(icon)}/>
                </div>
            </div>
        </div>
    )
}

export default CVHead
