import React from 'react';
import '../css/contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vv3drf2', 'template_3atpqsw', form.current, 'user_LLPQ8nevwOn6TFxqAdvLe')
        .then((result) => {
            setSent(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    const textareaRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const onChange = (event) => setValue(event.target.value);

    React.useLayoutEffect(() => {
        textareaRef.current.style.height = "inherit";
        textareaRef.current.style.height = `${Math.max(
          textareaRef.current.scrollHeight, 32)}px`;
    }, [value]);
    
    return (
        <div>
            <div className="contactForm">
                <div className="headerOne">
                    <h1>Let's talk!</h1>
                </div>
                <div className="contactGreen">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Hey there, my name is </label>
                        <input type="text" required name="first_name" placeholder="first name"/>
                        <input type="text" required name="last_name" placeholder="last name"/>
                        <label> and you can get back to me at </label>
                        <input type="email" required name="user_email" placeholder="email"/>
                        <label>.</label>
                        <label> I wanted to talk to you about: </label><br></br>
                        <textarea required onChange={onChange} ref={textareaRef} type="text" name="message" value={value} placeholder="type something here..."></textarea>
                        <br></br>
                        { !sent && <div className="centerUnder"><button>send</button></div> }
                        { sent && <div className="centerUnderText"><p><i>This email was sent successfully.</i></p></div> }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact