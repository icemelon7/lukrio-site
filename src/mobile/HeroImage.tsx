import React, { useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";

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
      <div className="Header--container">
        <img className="Header--logo__image" src={Logo}/>
        <span className="Header--spacer"></span>
      </div>
      <div className="Main--container">
        <div className="Main--text">
          <h1 className="Main--text__title">Join a new generation of investors</h1>
          <span className="Main--text__subtitle">
          Lukrio is an exciting new gamified social investing platform established with the goals of enabling low-risk competition and helping new investors get smarter.
          </span>
          <br/>
          <div className="Main--form__container">
            <input type="text" className="Main--form__input rounded" aria-label="Email" placeholder="Email Address" value={email} onChange={onChange}></input>
            <button type="button"
             className="btn btn-success Main--form__button"
             onClick={!isLoading ? onSubmit : () => true}
             disabled={isLoading}
             >{isLoading ? 'Sending...' : 'Sign up for the beta'}
             </button>
          </div>
          <div className="Main--form__postsubmit">{submitted}</div>
        </div>
        <img className="Main--mockup__image" src={Mockup}/>
      </div>
    </div>
    );
  }

  export default HeroImage;
