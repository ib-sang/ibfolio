import React from 'react'

// component

import Icon from "./../Icon"

const ContactPerson = () => {
    return (
        <section className="contact-me grid2">
            <div className="contact_person">
                <div className="cp-item">
                    <div className="cp-item-head">
                        <div>
                            <Icon name ="headphone"/>
                        </div>
                        <div className="cp-item-headnice">+ (223) 91 92 32 37</div>
                    </div>
                    <div className="cp-item-body">
                        Call me on above number to get quick solution. Solution charges may apply.
                    </div>
                </div>

                <div className="cp-item">
                    <div className="cp-item-head">
                        <div>
                            <Icon name ="envelop"/>
                        </div>
                        <div className="cp-item-headnice">sibrahima250@gmail.com</div>
                    </div>
                    <div className="cp-item-body">
                        If you have technical questions, chat live with developers in my Twe.
                    </div>
                </div>

                <div className="cp-item">
                    <div className="cp-item-head">
                        <div>
                            <Icon name ="headphone"/>
                        </div>
                        <div className="cp-item-headnice">+ (223) 91 92 32 37</div>
                    </div>
                    <div className="cp-item-body">
                        Call me on above number to get quick solution. Solution charges may apply.
                    </div>
                </div>
            </div>
            <div className="contact_map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13441.602943296042!2d-7.918262465587424!3d12.603469213586417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d3fc2e6c68e9%3A0xf8e44ef8b0645b0!2sSanSOFTIC!5e0!3m2!1sfr!2sml!4v1629765664898!5m2!1sfr!2sml"style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe> </div>
        </section>
        
    )
}

export default ContactPerson
