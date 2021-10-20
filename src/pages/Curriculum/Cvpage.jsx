import React from 'react';
import { Helmet } from 'react-helmet'

// components
import SimpleOne from '../../components/Modeles/ModelesSimple/SimpleOne';

const Cvpage = () => {
    return (
        <div className="container cv_wraps">
            <Helmet>
                <title>IB.Folio | Created your cv </title>
            </Helmet>
            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-1" className="cv_wraps_link">Faire la même chose?</a>
            </div>

            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-2" className="cv_wraps_link">Faire la même chose?</a>
            </div>

            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-3" className="cv_wraps_link">Faire la même chose?</a>
            </div>

            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-4" className="cv_wraps_link">Faire la même chose?</a>
            </div>

            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-5" className="cv_wraps_link">Faire la même chose?</a>
            </div>
            <div className="cv_wraps_item">
                <div className="cv_wraps_scroll">
                    <SimpleOne/>
                </div>
                <a href="/cv/modele-6" className="cv_wraps_link">Faire la même chose?</a>
            </div>            
        </div>
    )
}

export default Cvpage

