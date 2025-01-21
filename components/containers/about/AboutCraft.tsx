'use client'

import Image from "next/image";
import Link from "next/link";
// import CraftThumb from "@/public/images/craft-thumb.png";
import CraftThumb from "@/public/images/smashclash.jpg";
import Shape from "@/public/images/footer/shape-one.png";
import { useEffect, useState } from "react";

const AboutCraft = () => {
  const [width, setWidth] = useState(1000);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    }, []);

  return (
    <section className="mt-4 pb-0 craft">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">Coming Soon</span> */}
              <h2 className="title title-animation">
                Smash Clash
              </h2>
              <p>
                Join us for an electrifying Badminton Showdown! Register your team now and compete for the ultimate racket prize!
              </p>
              {/* <div className="section__content-cta">
                <Link href="tournaments" className="btn btn--primary">
                  Get started
                </Link>
              </div> */}
            </div>
          </div>
  
        </div>
      </div>
      {/* <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div> */}
    </section>
  );
};

export default AboutCraft;
