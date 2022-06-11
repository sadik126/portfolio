import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";
import { themeContext } from '../../Context';
import web from '../../img/web development.png';
import Loading from '../Loading/Loading';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_m8us6bs",
                "template_nwe1ru3",
                form.current,
                "zkE15L0Uepc0JFfh4"
            )
            .then(
                (result) => {
                    console.log(result.text);

                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}
            <div className="w-left ">
                <div className="awsome d-flex flex-row">
                    {/* darkMode */}

                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    > </div>
                    <img src={web} style={{ width: "200px" }} alt="" />
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" required name="user_name" className="user" placeholder="Name" />
                    <input type="email" required name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" required className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />


                    <span>{done && "Thanks for Contacting me"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;