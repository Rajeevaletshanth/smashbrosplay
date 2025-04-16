"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import google from "@/public/images/google.png";
import apple from "@/public/images/apple.png";
import meta from "@/public/images/meta.png";
import { useRouter } from 'next/navigation';
import axios from "axios";
import ValidateUser from "./ValidateUser";

const SignInSection = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [error, setError] = useState<any>(null)

  const router = useRouter()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async() => {
    try {
        setError(null)
        const response: any = await axios.post(`https://api.brexe.com/sbuser/login`, 
          {
            email, password
          }
          )
      
          if(response?.data?.isLoggedIn){
              localStorage.setItem('username', response.data.user.username)
              localStorage.setItem('email', response.data.user.email)
              localStorage.setItem('rank', response.data.user.rank)
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('id', response.data.user.id)
              router.push('/squad')
          }else{
            setError(response.data.message)
          }

    } catch (error) {
      setError((error as any).message)
    }    
  }

  return (
    <section className="authentication">
      <ValidateUser />
      <div className="authentication-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="authentication__content section">
                <div className="intro">
                  <h2 className="light-title-sm title-animation fw-7 text-white mt-12">
                    Login
                  </h2>
                  <p>welcome back, we missed you.</p>
                </div>
                <div className="authentication__inner">
                {error && <div className="mb-4" style={{backgroundColor:'#fc0345', borderRadius:'10px', padding:5, paddingLeft:10}}>
                    <p className="text-white">{error}</p>
                  </div>}
                  <form action="#" method="post">
                    <div className="input-single">
                      <label htmlFor="userName">Email</label>
                      <div className="ic-group">
                        <input
                          type="email"
                          name="user-name"
                          id="userName"
                          placeholder="Email"
                          required
                          onChange={(e:any) => setEmail(e.target.value)}
                        />
                        <span className="material-symbols-outlined">
                          person
                        </span>
                      </div>
                    </div>
                    <div className="input-single">
                      <label htmlFor="userPassword">Password</label>
                      <div className="ic-group pass">
                        <span
                          className="material-symbols-outlined show-pass"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? "visibility" : "visibility_off"}
                        </span>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          name="user-Password"
                          id="userPassword"
                          placeholder="Enter Password"
                          required
                          onChange={(e:any) => setPassword(e.target.value)}
                        />
                        <span className="material-symbols-outlined">key</span>
                      </div>
                      {/* <Link href="contact-us">Forget Password?</Link> */}
                    </div>
                    <div className="section__content-cta">
                      <button type="button" onClick={handleSignIn} className="btn btn--primary">
                        Sign In
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
                    Don&apos;t have an account?{" "}
                    <Link href="sign-up">Sign Up!</Link>
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

export default SignInSection;
