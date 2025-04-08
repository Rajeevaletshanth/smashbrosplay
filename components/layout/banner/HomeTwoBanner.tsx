'use client'
import Image from "next/image";
import Link from "next/link";
// import bannerThumb from "@/public/images/banner/banner-two-thumb.png";
import bannerThumb from "@/public/images/banner/hero-wp.png";
import Frame from "@/public/images/frame-three.png";
import { useEffect, useState } from "react";

const HomeTwoBanner = () => {

  const [username,setUsername] = useState<any>(null)

  useEffect(() => {
    const name = localStorage.getItem('username')
    if(name){
      setUsername(name)
    }
  },[])
  return (
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-two__content">
              <h1 className="title-animation">
                SMASH <br/>THE <span> LIMITS </span> 
              </h1>
              {username ? <p className="primary-text">
              Welcome back, <b style={{color:'#65ff4b'}}>{username}</b>!  <br/>{`Join the SmashBros squad, where passion meets precision. Keep leveling up your game and continue to fuel the team's unstoppable spirit!`}
              </p>:
              <p className="primary-text">
              Join SmashBros, where passion meets precision, and elevate your badminton game with unmatched team spirit              
              </p>}
              <div className="section__content-cta">
                {username ? <Link href="/squad" className="btn btn--primary" style={{fontWeight:700}}>
                  Meet the Bros
                </Link>:
                <Link href="/sign-up" className="btn btn--primary" style={{fontWeight:700}}>
                  Get Started
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="banner-two__thumb opacity-50">
        <Image src={bannerThumb} alt="Image" width={6000}/>
      </div> */}
      {/* <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-down"></i>
      </Link> */}
    </section>
  );
};

export default HomeTwoBanner;
