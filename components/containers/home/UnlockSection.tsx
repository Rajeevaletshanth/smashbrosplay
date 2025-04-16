'use client'

import Image from "next/image";
import Link from "next/link";
import unlockThumb from "@/public/images/SRPoster.jpg";
import { useEffect, useState } from "react";

const UnlockSection = () => {
  const [width, setWidth] = useState(1000);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    }, []);
  return (
    <section className="section unlock pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Tournament</span>
              <h2 className="title title-animation">
                Shuttle Royale
              </h2>
              <p>
                Join us for an electrifying Badminton Showdown! Register your team now and 
                compete for the ultimate racket prize!
              </p>
              <div className="section__content-cta">
                <Link href="/registration" className="btn btn--secondary">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
            <div className="unlock__thumb text-start text-lg-end">
              {width > 990 ? <div className="reveal-img parallax-img">
                <Image src={unlockThumb} alt="Image" priority />
              </div>
                : <div className="reveal-img-mobile parallax-img">
                  <Image src={unlockThumb} alt="Image" priority />
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
