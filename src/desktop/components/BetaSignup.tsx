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
    current_priority: number;
    referral_link: string;
    registered_email: string;
    total_referrals: number;
    total_users: number;
    user_id: string;
}  

const BetaSignup = ({}) => {
    const [showReferral, setShowReferral] = useState<boolean>(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState<subInfo>();
    const [isLoading, setIsLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['LukrioBetaId']);
    const [copied, setCopied] = useState(false);
    let params = new URLSearchParams(window.location.search);
    let ref = params.get('ref') as string;
    if (!ref) {
      ref = cookies?.refId;
    }
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
      setSubmitted({status: 401, count: 0, refSize: 0, email: "", total: 0, refId: "", current_priority: 0, referral_link: "", registered_email: "", total_users: 0, total_referrals: 0, user_id: ""});
      return;
    }
    if (!validateEmail(email)) {
      setSubmitted({status: 400, count: 0, refSize: 0, email: "", total: 0, refId: "", current_priority: 0, referral_link: "", registered_email: "", total_users: 0, total_referrals: 0, user_id: ""});
      return;
    }
    setIsLoading(true);
    try {
      let data = await sendBetaSignup(email, refId);
      setSubmitted(data);
      setCookie('LukrioBetaId', data.refId, { expires: new Date(2030, 1, 1)});
    } catch (e) {
      setSubmitted({status: 500, count: 0, refSize: 0, email: "", total: 0, refId: "", current_priority: 0, referral_link: "", registered_email: "", total_users: 0, total_referrals: 0, user_id: ""});
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
        (submitted && (submitted?.status === 200 || submitted?.status === 201)) ?
        <div className="animate__animated animate__fadeInUp Desktop--Main--result__container">
          {
            window.innerWidth < 1024 ?
            <>
            <div className="Desktop--Main--result__title">Thank You!</div>
            <div className="Desktop--Main--result__text">{submitted?.status === 200 ? "We have added you to the beta sign-up queue" : "Your beta sign-up spot is saved"}</div>
            <div className="Desktop--Main--result__count">{submitted.current_priority - 1 ?? 406}</div>
            <div className="Desktop--Main--result__title">Users ahead of you</div>
            <div className="Desktop--Main--result__count">{submitted.total_users ?? 2006}</div>
            <div className="Desktop--Main--result__title">Total signups</div>
            <div className="Desktop--Main--result__text">This sign-up was made for {submitted.email}. Check your email for next steps! Is this <span onClick={_resetState} className="Desktop--Main--result__link__always">not you?</span></div>
            <div className="Desktop--Main--result__title">Free money & earlier access?</div>
            <div className="Desktop--Main--result__text">Each user gets a free $5 starting balance.</div>
            <div className="Desktop--Main--result__text" style={{marginBottom: '10px'}}>Refer a friend to skip forward 5 positions and get a lottery ticket to win $10. We will draw 25 lottery tickets as winners for our beta.</div>
            <div className="Desktop--Main--result__tickets">You have {submitted.refSize ?? 0} ticket{submitted.refSize > 1 || submitted.refSize === 0 ? "s" : ""} (total tickets: {submitted.total ? submitted.total + 25 : 178})</div>
            <div className="Desktop--Main--result__title">Share this unique referral link:</div>
            <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}`}
            onCopy={_handleCopyClick}>
              <span className="Desktop--Main--result__link">https://www.lukrio.com/?ref={submitted.refId}</span>
            </CopyToClipboard>
            <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}`}
            onCopy={_handleCopyClick}>
              <div className="Desktop--Main--result__link">{copied ? "(Copied!)" : "(Click to copy)"}</div>
            </CopyToClipboard>
            </>
            :
            <>
            <div className="Desktop--Main--result__column">
              <div className="Desktop--Main--result__title">Thank You!</div>
              <div className="Desktop--Main--result__text">{submitted?.status === 200 ? "We have added you to the beta sign-up queue" : "Your beta sign-up spot is saved"}</div>
              <div className="Desktop--Main--result__count">{submitted.current_priority - 1 ?? 406}</div>
              <div className="Desktop--Main--result__title">Users ahead of you</div>
              <div className="Desktop--Main--result__count">{submitted.total_users ?? 2006}</div>
              <div className="Desktop--Main--result__title">Total signups</div>
              <div className="Desktop--Main--result__text">This sign-up was made for {submitted.email}. Check your email for next steps! Is this <span onClick={_resetState} className="Desktop--Main--result__link__always">not you?</span></div>
            </div>
            <div className="Desktop--Main--result__column">
              <div className="Desktop--Main--result__title">Interested in free money & earlier access?</div>
              <div className="Desktop--Main--result__text">Each user gets a free $5 starting balance.</div>
              <div className="Desktop--Main--result__text" style={{marginBottom: '10px'}}>Refer a friend to skip forward 5 positions and get a lottery ticket to win $10. We will draw 25 lottery tickets as winners for our beta.</div>
              <div className="Desktop--Main--result__tickets">You have {submitted.refSize ?? 0} referral tickets (total tickets: {submitted.total ? submitted.total + 25 : 178})</div>
              <div className="Desktop--Main--result__title">Share this unique referral link:</div>
              <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}`}
              onCopy={_handleCopyClick}>
                <span className="Desktop--Main--result__link">https://www.lukrio.com/?ref={submitted.refId}</span>
              </CopyToClipboard>
              <CopyToClipboard text={`https://www.lukrio.com/?ref=${submitted.refId}`}
              onCopy={_handleCopyClick}>
                <div className="Desktop--Main--result__link">{copied ? "(Copied!)" : "(Click to copy)"}</div>
              </CopyToClipboard>
            </div>
            </>
          }
          
        </div>
        :
        <>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={700} className="Desktop--Main--form__container">
            <form action="">
              {window.innerWidth < 1024 ? 
              <div style={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'flex-start'}}>
              <div style={{position: 'relative'}}>
                <span className="input">
                  <input style={{color: 'aqua'}} required id="email" type="text" aria-label="Email" placeholder="Your Email" value={email} onChange={onChange}/>  
                  <span></span>
                </span>
              </div>
              {
              ref ?
              <div />
              :
              showReferral ?
              <div style={{display: 'flex', alignItems: 'center', marginTop: '25px'}}>
              <div style={{position: 'relative'}}>
              <span className="input">
              <input style={{color: 'aqua'}} required id="referral" placeholder="Referral ID (Optional)" type="text" aria-label="Email" value={refId} onChange={refOnChange}/> 
              <span></span>
              </span>
              </div>
              <button type="button"
              className="betaSignup__button"
              onClick={() => setShowReferral(false)}
              disabled={!showReferral}
              >No referral code?
              </button>
              </div>
              :
              <button type="button"
              className="betaSignup__button"
              onClick={() => setShowReferral(true)}
              disabled={showReferral}
              >Did a friend refer you?
              </button>
              }
              <button type="button"
              className="betaSignup__button"
              onClick={!isLoading ? onSubmit : () => true}
              disabled={isLoading}
              >{isLoading ? 'Sending...' : 'Sign up for the beta'}
              </button>
            </div>
              :
              <>
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
                showReferral ?
                <div style={{display: 'flex', alignItems: 'center', marginTop: '25px'}}>
                <div style={{position: 'relative'}}>
                <span className="input">
                <input style={{color: 'aqua'}} required id="referral" placeholder="Referral ID (Optional)" type="text" aria-label="Email" value={refId} onChange={refOnChange}/> 
                <span></span>
                </span>
                </div>
                <button type="button"
                className="betaSignup__button"
                onClick={() => setShowReferral(false)}
                disabled={!showReferral}
                >No referral code?
                </button>
                </div>
                :
                <button type="button"
                style={{marginTop: '15px', marginBottom: '15px', marginLeft: '0px'}}
                className="betaSignup__button"
                onClick={() => setShowReferral(true)}
                disabled={showReferral}
                >Did a friend refer you?
                </button>
              }
              </>
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