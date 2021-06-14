import React from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import Lottie from 'react-lottie';
import * as animationData from './assets/animations/graphic.json'
import video from './assets/backdrop.mp4'

class HeroImage extends React.Component {
    constructor() {
      super();
      this.state = {
        email: "",
        submitted: "",
        isLoading: false,
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    render() {
      return <div className="Main">
      <video id="background-video" muted autoplay="autoplay" loop>
        <source src={video} type="video/mp4"/>
      </video>
        <div className="Main--text">
          <span className="Main--text__subtitle">
          Lukrio is an exciting new gamified social investing platform established with the goals of enabling low-risk competition and helping new investors get smarter.
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
          {
            this.state.submitted === "" ?
            <div/>
            :
            <div className="Main--form__postcontainer">
              <div className="Main--form_posttext">Thank you! We will be in touch</div>
              <div className="Main--form_postnumber">{this.state.data.number}</div>
              <div className="Main--form_postoptions">
                <div className="Main--form_postsocial">
                  
                </div>
              </div>
            </div>
          }
          <div className="Main--form__postsubmit">{this.state.submitted}</div>
        </div>
      </div>;
    }


    onSubmit() {
      if (this.state.email == "") {
        return;
      }
      this.setState({isLoading: true});
      /*const self = this;
      var data = JSON.stringify({
        "email": this.state.email
      });

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          self.setState({isLoading: false, email: "", submitted: "Thanks, we'll be in touch!"});
        }
      });

      xhr.open("POST", "https://lukrio-ae06.restdb.io/rest/emails");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "6046fb74acc40f765fede55e");
      xhr.setRequestHeader("cache-control", "no-cache");

      xhr.send(data); */

      setTimeout(() => {
        this.setState({isLoading: false, email: "", submitted: "Thanks, we'll be in touch!"});
      }, 2000);
    }

    onChange(event) {
      this.setState({email: event.target.value});
    }
  }

  export default HeroImage;
