import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    })

    const SERVICE_ID = 'service_cl2lufu'
    const TEMPLATE_ID = 'template_z0whr7c'
    const USER_ID = 'user_L0twZvYZdxAjJ9nwSs7OQ'

    const handleChange = (e) =>{
        e.preventDefault();
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            toSend,
            USER_ID
          )
            .then((response) => {
                notify(
                    'Your message is sended',
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    },
                    'success'
                    )
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                notify(
                    'Your message is not sended',
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    },
                    'error'
                )
              console.log('FAILED...', err);
            });
    }

    const notify = (message, option, type) => {
        if (type === "success") {
            return toast.success(message, option);
        }
        return toast.error(message, option);
    }

    return (
        <form onSubmit = { handleSubmit } className="form-home">
                <ToastContainer />
                <div className="form-picture">
                    <img src="./img/ib-ml.png" alt="img form"/>
                </div>
                <div className="form-contact">
                    <h1 className="form-title">Say hi by filling the form out below.</h1>
                    <div className="form-group">
                        <label htmlFor="name" className="form-controle">My name is</label>
                        <input type="text" className="form-input" name='name' onChange={ handleChange } id="name"/>
                        <label htmlFor="email"> , my email address is </label>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-input" name='email' onChange={ handleChange } id="email"/>
                        <label htmlFor="contact">, I am contacting you regarding </label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-input" name='subject' onChange={ handleChange } id="contact"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">I want to tell you that: </label>
                    </div>
                    <div className="form-group">
                        <textarea onChange={ handleChange } name='message' cols="30" rows="10" id="description" className="form-textarea"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn-form-home btn">Knock up my inbox</button>
                    </div>
                </div>
                
            </form>
    )
}

export default ContactForm
