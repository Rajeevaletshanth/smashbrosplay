'use client'
import Image from "next/image";
import Link from "next/link";
// import CraftThumb from "@/public/images/craft-thumb.png";
import CraftThumb from "@/public/images/banner/begins.jpg";
import Shape from "@/public/images/footer/shape-one.png";
import { useEffect, useState } from "react";

const Craft = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">AI Image</span> */}
              <h2 className="title title-animation">
                Let the Games Begin!
              </h2>
              <p>
                Join the SmashBros crew and enjoy badminton, fun challenges,
                and plenty of laughs. No pressure, just good vibes and epic moments!
              </p>
              <div className="section__content-cta">
                <Link href="sign-up" className="btn btn--primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              {width > 990 ? <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
                : <div className="reveal-img-mobile parallax-img">
                  <Image src={CraftThumb} alt="Image" priority />
                </div>}
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
