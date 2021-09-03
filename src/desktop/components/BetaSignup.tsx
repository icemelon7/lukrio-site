import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useCookies } from 'react-cookie';
import { getSignupInfo, sendBetaSignup } from '../../fetchers/betaSignup';
import './BetaSignup.styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export interface subInfo {
    status: number;
    count: number;
    email: string;
    total: number;
    refId: string;
    refSize: number;
}  

const BetaSignup = ({}) => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState<subInfo>();
    const [isLoading, setIsLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['LukrioBetaId']);
    const [copied, setCopied] = useState(false);
    let params = new URLSearchParams(window.location.search);
    let ref = params.get('ref') as string;
    const [refId, setRefId] = useState<string>(ref);
    let timer: NodeJS.Timeout;
  const _handleCopyClick = () => {
    setCopied(true);
    timer = setTimeout(() => setCopied(false), 800);
  }

  const _resetState = () => {
    removeCookie('LukrioBetaId');
    setSubmitted(undefined);
    setIsLoading(false);
  }

  const onSubmit = async () => {
    if (email == "") {
      setSubmitted({status: 401, count: 0, refSize: 0, email: "", total: 0, refId: ""});
      return;
    }
    if (!validateEmail(email)) {
      setSubmitted({status: 400, count: 0, refSize: 0, email: "", total: 0, refId: ""});
      return;
    }
    setIsLoading(true);
    try {
      let data = await sendBetaSignup(email, refId);
      setSubmitted(data);
      setCookie('LukrioBetaId', data.refId, { expires: new Date(2030, 1, 1)});
    } catch (e) {
        setSubmitted({status: e.status, count: 0, refSize: 0, email: "", total: 0, refId: ""});
    }
  }

  const _loadSubmittedFromId = async () => {
    let subData = await getSignupInfo(cookies?.LukrioBetaId);
    //let subData = await getSignupInfo("31K8n7rg");
    setSubmitted(subData);
  }

  useEffect(() => {
    if (cookies?.LukrioBetaId) {
      try {
        _loadSubmittedFromId();
      } catch (e) {
        removeCookie('LukrioBetaId');
      }
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, []);

  function validateEmail(email: string) : boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  }

  const refOnChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setRefId(event.target.value);
  }

    return (
        (submitted && submitted?.status === 200) ?
        <div className="animate__animated animate__fadeInUp Desktop--Main--result__container">
          <div className="Desktop--Main--result__column">
            <div className="Desktop--Main--result__title">Thank You!</div>
            <div className="Desktop--Main--result__text">We have added you to the beta sign-up queue</div>
            <div className="Desktop--Main--result__count">{submitted.count ?? 406}</div>
            <div className="Desktop--Main--result__title">Registered So Far</div>
            <div className="Desktop--Main--result__text">This sign-up was made for {submitted.email}. Check your email for next steps! Is this <span onClick={_resetState} className="Desktop--Main--result__link__always">not you?</span></div>
          </div>
          <div className="Desktop--Main--result__column">
            <div className="Desktop--Main--result__title">Interested in free money?</div>
            <div className="Desktop--Main--result__text">Each user gets a free $5 starting balance. For each friend you refer, you get a lottery ticket to win a further $10. We will draw 25 random lottery tickets as winners for our beta.</div>
            <div className="Desktop--Main--result__tickets">You have {submitted.refSize ?? 0} tickets (total tickets: {submitted.total ? submitted.total + 10 : 178})</div>
            <div className="Desktop--Main--result__title">Share this unique referral link:</div>
            <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}}`}
            onCopy={_handleCopyClick}>
              <span className="Desktop--Main--result__link">https://www.lukrio.com/?ref={submitted.refId}</span>
            </CopyToClipboard>
            <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}}`}
            onCopy={_handleCopyClick}>
              <div className="Desktop--Main--result__link">{copied ? "(Copied!)" : "(Click to copy)"}</div>
            </CopyToClipboard>
          </div>
        </div>
        :
        <>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={700} className="Desktop--Main--form__container">
            <form action="">
                <div style={{display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center'}}>
                <div style={{position: 'relative'}}>
                  <span className="input">
                    <input style={{color: 'aqua'}} required id="email" type="text" aria-label="Email" placeholder="Your Email" value={email} onChange={onChange}/>  
                    <span></span>
                  </span>
                  
                </div>
                <button type="button"
                className="betaSignup__button"
                onClick={!isLoading ? onSubmit : () => true}
                disabled={isLoading}
                >{isLoading ? 'Sending...' : 'Sign up for the beta'}
                </button>
                </div>
                {
                  ref ?
                  <div />
                  :
                  <div style={{position: 'relative', marginTop: '25px'}}>
                  <span className="input">
                  <input style={{color: 'aqua'}} required id="referral" placeholder="Referral ID (Optional)" type="text" aria-label="Email" value={refId} onChange={refOnChange}/> 
                  <span></span>
                  </span>
                  </div>
                }
                
                
            </form>
                  
            <div className="Desktop--Main--form__postsubmit" style={submitted?.status as number < 400 ? {} : {color: "red"}} hidden={!submitted}>{
                submitted?.status === 409 ?
                "Whoops, looks like you already registered using this email!"
                :
                submitted?.status === 400 ?
                "Whoops, please submit a valid email address!"
                :
                submitted?.status === 401 ?
                "Whoops, please submit an email address!"
                :
                "Whoops, Internal Server Error! Please try again later..."
                }
            </div>
        </ScrollAnimation>
        </>
    )
}

export default BetaSignup;