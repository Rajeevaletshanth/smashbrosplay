"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import google from "@/public/images/google.png";
import apple from "@/public/images/apple.png";
import meta from "@/public/images/meta.png";
import axios from "axios";
import { useRouter } from 'next/navigation';
import ValidateUser from "./ValidateUser";

const SignUpSection = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleTwo, setPasswordVisibleTwo] = useState(false);

  const [username, setUsername] = useState<any>('')
  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [confirmPassword, setConfirmPassword] = useState<any>('')
  const [error, setError] = useState<any>(null)
  const [success, setSuccess] = useState<any>(null)

  const router = useRouter()

  const handleSignUp = async() => {
    try {
      if(password !== confirmPassword){
        setError("Password doesn't match")
      }else{
        setError(null)
        const response: any = await axios.post(`https://api.brexe.com/sbuser/register`, 
          {
            username, email, password
          }
          )
      
          if(response.data.response === 'success'){
            setSuccess('Registered successfully, Login to continue.')
            setTimeout(() => {
              router.push('/sign-in')
            },1000)
          }else{
            setError(response.data.message)
          }
      }
    } catch (error) {
      setError((error as any).message)
    }
    
    
  }

  return (
    <section className="authentication auth-create">
      <ValidateUser />
      <div className="authentication-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="authentication__content section">
                <div className="intro">
                  <h2 className="light-title-sm title-animation fw-7 text-white mt-12">
                    Sign Up
                  </h2>
                  <p>Getting started is easy</p>
                </div>
                <div className="authentication__inner">
                  {error && <div className="mb-4" style={{backgroundColor:'#fc0345', borderRadius:'10px', padding:5, paddingLeft:10}}>
                    <p className="text-white">{error}</p>
                  </div>}
                  {success && <div className="mb-4" style={{backgroundColor:'#00ad26', borderRadius:'10px', padding:5, paddingLeft:10}}>
                    <p className="text-white">{success}</p>
                  </div>}

                  <form action="#" method="post">
                    <div className="input-single">
                      <label htmlFor="createuserName">Username</label>
                      <div className="ic-group">
                        <input
                          type="text"
                          name="createuser-name"
                          id="createuserName"
                          placeholder="Full Name"
                          required
                          onChange={(e:any) => setUsername(e.target.value)}
                        />
                        <span className="material-symbols-outlined">
                          person
                        </span>
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="create-useremail">Your Email</label>
                      <div className="ic-group">
                        <input
                          type="email"
                          name="create-user-email"
                          id="create-useremail"
                          placeholder="Enter Mail"
                          required
                          onChange={(e:any) => setEmail(e.target.value)}
                        />
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="createPassword">Password</label>
                      <div className="ic-group pass">
                        <span
                          className="material-symbols-outlined show-pass"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? "visibility" : "visibility_off"}
                        </span>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="create-Password"
                          id="createPassword"
                          placeholder="Enter Password"
                          required
                          onChange={(e:any) => setPassword(e.target.value)}
                        />
                        <span className="material-symbols-outlined">key</span>
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="createconfirmPassword">
                        Confirm Password
                      </label>
                      <div className="ic-group pass">
                        <span
                          className="material-symbols-outlined show-pass"
                          onClick={() =>
                            setPasswordVisibleTwo(!passwordVisibleTwo)
                          }
                        >
                          {passwordVisibleTwo ? "visibility" : "visibility_off"}
                        </span>
                        <input
                          type={passwordVisibleTwo ? "text" : "password"}
                          name="createconfirm-Password"
                          id="createconfirmPassword"
                          placeholder="Confirm Password"
                          required
                          onChange={(e:any) => setConfirmPassword(e.target.value)}
                        />
                        <span className="material-symbols-outlined">key</span>
                      </div>
                    </div>
                    <div className="section__content-cta">
                      <button type="button" onClick={handleSignUp} className="btn btn--primary">
                        Create Account
                      </button>
                    </div>
                    {/* <div className="divider">
                      <span></span>
                      <p>Or continue with</p>
                      <span></span>
                    </div> */}
                  </form>
                  {/* <div className="auth-cta">
                    <button>
                      <Image src={google} alt="Image" priority />
                    </button>
                    <button>
                      <Image src={apple} alt="Image" priority />
                    </button>
                    <button>
                      <Image src={meta} alt="Image" priority />
                    </button>
                  </div> */}
                </div>
                <div className="auth-footer">
                  <p>
                    Have an account? <Link href="sign-in">Sign In!</Link>
                  </p>
                  <div className="section__content-cta">
                    <Link href="/" className="btn btn--secondary">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
