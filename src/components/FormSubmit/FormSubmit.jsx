import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import s from "./FormSubmit.module.scss"
import { HiOutlineMail } from 'react-icons/hi'

export const ContactUs = () => {

  const [status, setStatus] = useState('')
  useEffect(() => {
    if (status === 'SUCCESS') {
        setTimeout(()=>{
          setStatus()
        },3000)
    }
  }, [status])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gprnr06',
      'template_i02u4jt',
      form.current,
      'Kwy3E1VUZvQJdHMBV')
      .then((res) => {
       console.log('ok', res);
        setStatus('SUCCESS')
      }, (error) => {
        console.log('failed..', error);
      });
  };
  const renderAlert = ()=>(
    <div className={s.render}>
      <p>Your message submitted succssefuly!</p>
    </div>
  )

  return (
    <div>
      {status && renderAlert()}
      <form className={s.form} ref={form} onSubmit={sendEmail}>

        <div className={s.form_inputs}>
          <input className={s.form_input} type="text" placeholder='Name' name="user_name" label='name' />
          <input className={s.form_input} type="email" placeholder='Email' name="user_email" label='email'/>
        </div>
        <textarea className={s.form_textarea} name="message" placeholder="Message" label="Your message here"></textarea>
        <button className={s.form_btn} type="submit" value="Send" >Submit<HiOutlineMail /></button>
      </form>
    </div>
  );
};

