import emailjs from 'emailjs-com';
import React, { useState } from 'react';

import './contact.css';

const ContactForm = () => {
    const [ sendFormState, setSendFormState] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mbp1zwn', 'template_mzxtaxa', e.target, 'user_ZOm28bgbhynKvMGyJtdjP')
            .then((result) => {
                console.log(result.text);
                setSendFormState('OK');
                setTimeout(() => {
                    setSendFormState('');
                }, 5000);
            }, (error) => {
                console.log(error.text);
                setSendFormState("ERR");
                setTimeout(() => {
                    setSendFormState('');
                }, 5000);
            });
    }

    return (
        <React.Fragment>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Your email' required className='form-control project-input'/>
                <input type="text" name="subject" placeholder='Subject' className='form-control project-input'/>
                <textarea name="message" placeholder='Your message' className='form-control project-input'/>
                <button type="submit" className='btn contact-form-btn'>Send</button>
            </form>
            {sendFormState === 'OK' ? <div className='dark-green-text form-status'>Správa odoslaná</div> : ''}
            {sendFormState === 'ERR' ? <div className='dark-green-text form-status'>Vyskytla sa chyba, skúste to neskôr</div> : ''}
        </React.Fragment>
    );
};

export default ContactForm;
