import React from 'react'

// component

import CVHead from '../CVHead'

const CVAbout = () => {
    return (
        <div className="section-man">
            <CVHead icon="man-user" title="About me"/>
            <div className="about-contact">
                <div className="about-left">
                    <ul className="about-items">
                        <li className="about-item">
                            <h3 className="ai-title">Full name</h3>
                            <p className="ai-desc">Ibrahima Baba Sangaré</p>
                        </li>
                        <li className="about-item">
                            <h3 className="ai-title">Profession</h3>
                            <p className="ai-desc">Ingener in Informatic</p>
                        </li>
                        <li className="about-item">
                            <h3 className="ai-title">Address</h3>
                            <p className="ai-desc">Yirimadjo, Bamako-Mali</p>
                        </li>
                    </ul>
                </div>
                <div className="about-img">
                    <img src="./img/ib.jpg" alt="" />
                </div>
                <div className="about-right">
                    <ul className="about-items">
                        <li className="about-item">
                            <h3 className="ai-title">Phone</h3>
                            <a href="tel:+22391923237" className="ai-desc">+ (223) 91 92 32 37</a>
                        </li>
                        <li className="about-item">
                            <h3 className="ai-title">Email</h3>
                            <a href="mailto:sibrahima250@gmail.com" className="ai-desc">sibrahima250@gmail.com</a>
                        </li>
                        <li className="about-item">
                            <h3 className="ai-title">Localisation</h3>
                            <p className="ai-desc">SanSOFTIC</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about-body">
                <p>
                    Folio; an innovative Internet marketing solutions company that offers comprensive web development,
                    SMO services, SEO strategies and various other types of internet marketing relate services.
                </p>
                <p>
                    Folio; an innovative Internet marketing solutions company that offers comprensive web development,
                    SMO services, SEO strategies and various other types of internet marketing relate services.
                </p>
                <a href="./cv_ingener.pdf" className="about-btn" target="_blank">Download my CV</a>
            </div>
        </div>
    )
}

export default CVAbout
