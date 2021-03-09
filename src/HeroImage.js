import React from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";

class HeroImage extends React.Component {
    constructor() {
      super();
      this.state = {
        email: "",
        submitted: false,
        isLoading: false,
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    render() {
      return <div className="Main">
      <div className="Header--container">
        <img className="Header--logo__image" src={Logo}/>
        <span className="Header--spacer"></span>
      </div>
      <div className="Main--container">
        <div className="Main--text">
          <h1 className="Main--text__title">Creating a new generation of investors</h1>
          <span className="Main--text__subtitle">
          A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience level.
          </span>
          <br/>
          <div className="Main--form__container">
            <input type="text" className="Main--form__input rounded" aria-label="Email" placeholder="Email Address" value={this.state.email} onChange={this.onChange}></input>
            <button type="button"
             className="btn btn-success Main--form__button"
             onClick={!this.state.isLoading ? this.onSubmit : null}
             disabled={this.state.isLoading}
             >{this.state.isLoading ? 'Sending...' : 'Sign up for the beta'}
             </button>
          </div>
          <div className="Main--form__postsubmit" hidden={!this.state.submitted}>Thanks, we'll be in touch!</div>
        </div>
        <img className="Main--mockup__image" src={Mockup}/>
      </div>
    </div>;
    }


    onSubmit() {
      if (this.state.email == "") {
        return;
      }
      this.setState({isLoading: true});
      const self = this;
      var data = JSON.stringify({
        "email": this.state.email
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
          self.setState({isLoading: false, email: "", submitted: true});
        }
      });
      
      xhr.open("POST", "https://lukrio-ae06.restdb.io/rest/emails");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "6046fb74acc40f765fede55e");
      xhr.setRequestHeader("cache-control", "no-cache");
  
      xhr.send(data);
    }

    onChange(event) {
      this.setState({email: event.target.value});
      console.log(this.state.email);
    }
  }


  

  export default HeroImage;