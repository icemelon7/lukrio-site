import React, { useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import video from '../assets/backdrop.mp4';

const HeroImage = ({}) => {
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

  const onChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div className="Main">
      <video id="background-video" muted autoplay="autoplay" loop>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="Main--text">
        <span className="Main--text__subtitle">
        A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience level.
        </span>
        <br/>
        <div className="Main--form__container">
          <input type="text" className="Main--form__input rounded" aria-label="Email" placeholder="Email Address" value={email} onChange={onChange}></input>
          <button type="button"
            className="btn btn-success Main--form__button"
            onClick={!isLoading ? onSubmit : null}
            disabled={isLoading}
            >{isLoading ? 'Sending...' : 'Sign up for the beta'}
            </button>
        </div>
        <div className="Main--form__postsubmit" hidden={!submitted}>Thanks, we'll be in touch!</div>
      </div>
    </div>
  );
}

export default HeroImage;