import React, { useState } from 'react';
import Mockup from "../assets/mockup.png";
import video from '../assets/mockup_video.MP4';
import './SignupSideBySide.css';

const SignupSideBySide = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    if (email == "") {
      return;
    }
    setIsLoading(true);
    const self = this;
    var data = JSON.stringify({
      "email": email
    });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        setIsLoading(false);
        setEmail("");
        setSubmitted(true);
      }
    });
    
    xhr.open("POST", "https://lukrio-ae06.restdb.io/rest/emails");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "6046fb74acc40f765fede55e");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
  }

  const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  }
    return (
    <div className="Desktop--SideBySide--container">
        <div className="Desktop--SideBySide--wrapper">
            <div className="Desktop--SideBySide--vertical">
                <div className="Desktop--SideBySide--text">
                    <div className="Desktop--SideBySide--text__header">Join a new generation of investors</div>
                    <div className="Desktop--SideBySide--text__main">A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience level.</div>
                </div>
                <div className="Desktop--Main--form__container">
                <input type="text" className="Desktop--Main--form__input rounded" aria-label="Email" placeholder="Email Address" value={email} onChange={onChange}></input>
                <button type="button"
                    className="Desktop--btn btn-success Desktop--Main--form__button"
                    onClick={!isLoading ? onSubmit : () => true}
                    disabled={isLoading}
                    >{isLoading ? 'Sending...' : 'Sign up for the beta'}
                    </button>
                </div>
                <div className="Desktop--Main--form__postsubmit" hidden={!submitted}>Thanks, we'll be in touch!</div>
            </div>
            <div className="Desktop--SideBySide--spacer"></div>
            <video className="Desktop--Main--mockup__image" autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
            
    </div>
    )
}

export default SignupSideBySide;