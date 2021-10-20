import React from 'react';
import { useParams } from 'react-router';

import PresentCV from './PresentCV';

const CreateCVPage = () => {
    const { idM } = useParams();

    return (
        <div className="create_cv container">
            <div className="create_cv_head">
                <h1 className="title">Faire un cv rapide</h1>
                <div className="banner_progress">1/6</div>
            </div>
            <div className="create_cv_body">
                <div className="create_cv_body_l">{idM && ( <span>{idM}</span> )}</div>
                <div className="create_cv_body_r">
                    <PresentCV/>
                </div>
            </div>
        </div>
    )
}

export default CreateCVPage
