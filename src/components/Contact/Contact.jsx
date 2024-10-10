import React from 'react'
import "./Contact.css"
import { SectionTitle } from "../index"
import { locationIcon, callIcon, emailIcon } from '../../assets'

function Contact() {

  const [submitResult, setSubmitResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3_FORM_ACCESS_KEY);

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setSubmitResult("Message Sent Successfully");
        event.target.reset();
      } else {
        
        setSubmitResult(data.message);
      }
    } catch (error) {
      setSubmitResult("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <SectionTitle title="Get in touch" />

      <div className="contact-section">

        <div className="contact-left">

          <h1>Let&apos;s talk </h1>
          <p>I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
        
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailIcon} alt="" />
              <p>tbtshafiq@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+880 1937-998676, 01517204788</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Tigerpass, Chittagong, Bangladesh</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">

          <div className='form-field'>
            <label htmlFor='name'>Your Name</label>
            <input type="text" name='name' id='name' placeholder='Enter your name' required />
          </div>

          <div className='form-field'>
            <label htmlFor='email'>Your Email</label>
            <input type="email" name='email' id='email' placeholder='Enter your email' required />
          </div>

          <div className='form-field'>
            <label htmlFor='message'>Message</label>
            <textarea rows={8} placeholder='Write Your Message Here' required></textarea>
          </div>

          <div className='contact-submit'>
            <button type='submit' disabled={loading} className="submit-btn">
            {
            loading ? (
              <><div className="spinner"></div>&nbsp; please wait</>
              ) : (
                'Submit Now'
              )
            }
            </button>
            {
              submitResult && <span>{submitResult}</span>
            }
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact