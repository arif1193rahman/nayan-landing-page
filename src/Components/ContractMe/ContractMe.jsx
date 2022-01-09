import React from 'react'
import './ContractMe.css';
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import {useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContractMe = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_g74u82y",
            "template_7uso5aw",
            formRef.current,
            "user_iWkvYsFX2uGnR7Ki7hERJ"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let us know your Advice</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +8801724785683456835
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            nayan@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            1200, Mirpur_1 Dhaka
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me...
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor:"white" }} type="text" placeholder="Name" name="from_name" />
                        <input style={{ backgroundColor:"white" }} type="text" placeholder="Subject" name="from_subject" />
                        <input style={{ backgroundColor: "white" }} type="text" placeholder="Email" name="from_email" />
                        <input style={{ backgroundColor:"white" }} type="text" placeholder="Phone" name="from_phone" />
                        <textarea style={{ backgroundColor:"white" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContractMe