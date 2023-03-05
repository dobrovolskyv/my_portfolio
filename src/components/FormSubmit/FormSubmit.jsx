import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import s from "./FormSubmit.module.scss"
import { HiOutlineMail } from 'react-icons/hi'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gprnr06', 
    'template_i02u4jt', 
    form.current,
     'Kwy3E1VUZvQJdHMBV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form action="" className={s.form} ref={form} onSubmit={sendEmail}>
            <div className={s.form_inputs}>
              <input className={s.form_input} type="text" placeholder='Name' name="user_name"/>
              <input className={s.form_input} type="email" placeholder='Email' name="user_email"/>
            </div>
            <textarea className={s.form_textarea} name="message" placeholder="Message"></textarea>
            <button className={s.form_btn} type="submit" value="Send">Submit<HiOutlineMail /></button>
          </form>
  );
};