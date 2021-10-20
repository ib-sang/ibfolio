import React, { Fragment, useState } from 'react';
import {useDispatch} from "react-redux";
import {profileUserStart} from "./../../redux/Profiles/profiles.actions";

const PresentCV = () => {

    const dispatch = useDispatch()
    
    let err = {}

    const [errors, setErrors] = useState({});
    const [fullname, setFullname] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(fullname.length < 4){
            console.log(fullname.length);
            err = {
                ...err,
                "fullname": "Vous devez ecrire votre nom et prénom"
            }
            setErrors(err)
        }
        if(adress.length < 4){
            err = {
                ...err,
                "adress": "Au moins 4 caratere" 
            }
            setErrors(err)
        }
        if(phone.length < 8){
            err = {
                ...err,
                "phone": "Le numero invalide"
            }
            setErrors(err)
        }
        if(status.length < 4){
            err = {
                ...err,
                "status": "Au moins 4 caratere"
            }
            setErrors(err)
        }
        
        if(subject.length < 8){
            err = {
                ...err,
                "subject": "Au moins 8 caratere"
            }
            setErrors(err)
        }
        if(!Object.keys(errors).length){
            console.log('redux');
            dispatch(profileUserStart({
                "fullname": fullname,
                "adress": adress,
                "phone": phone,
                "email": email,
                "status": status,
                "subject": subject
            }))
        }
        
    }


    return (
        <Fragment>
            <h2 className="title2">Formulaire de cv 1/6</h2>
                <form action="" method="post" onSubmit={handleSubmit }>
                    <div className="form_wrapper">
                        <div className="form_group">
                            <label htmlFor="name" className="form_controle">Nom complèt ?</label>
                            <input className="form_input" id="fullname" onChange = {e =>setFullname(e.target.value)} />
                            {errors.fullname && (<span className="form_danger"> {errors.fullname} </span>)}
                        </div>

                        <div className="form_group">
                            <label htmlFor="adress" className="form_controle">Adresse ?</label>
                            <input className="form_input" type="text" id="adress" onChange = {e =>setAdress(e.target.value)}  />
                            {errors.adress && (<span className="form_danger"> {errors.adress} </span>)}
                        </div>
                        <div className="form_group">
                            <label htmlFor="phone" className="form_controle">Téléphone ?</label>
                            <input className="form_input" type="text" id="phone" onChange = {e =>setPhone(e.target.value)}  />
                            {errors.phone && (<span className="form_danger"> {errors.phone} </span>)}
                        </div>

                        <div className="form_group">
                            <label htmlFor="email" className="form_controle">Email ?</label>
                            <input className="form_input" type="text" id="email" onChange = {e =>setEmail(e.target.value)}  />
                            {errors.email && (<span className="form_danger"> {errors.email} </span>)} 
                        </div>

                        <div className="form_group">
                            <label htmlFor="status" className="form_controle">Diplôme ?</label>
                            <input className="form_input" type="text" id="status" onChange = {e =>setStatus(e.target.value)}  />
                            {errors.status && (<span className="form_danger"> {errors.status} </span>)} 
                        </div>

                    </div>
                    <div className="form_group form_group_text">
                        <label htmlFor="subject" className="form_controle">Objet ?</label>
                        <textarea id="subject" className="form_input form_text" id="" cols="30" rows="5" onChange = {e =>setSubject(e.target.value)} ></textarea>
                        {errors.subject && (<span className="form_danger"> {errors.subject} </span>)} 
                    </div>
                    <div className="form_group">
                        <button className="btn_form btn">suivant</button>
                    </div>
                    
                    </form>
        </Fragment>
    )
}

export default PresentCV
