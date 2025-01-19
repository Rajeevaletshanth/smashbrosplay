'use client'

import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";
import { useEffect, useState } from "react";

const TeamCraft = ({ no, name, players, rank, logo, color }: any) => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <section className=" pb-0 ">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">Team No {no}</span> */}
              <h1 className="title title-animation" style={{ color: color}}>
                {name}
              </h1>
                <h5 className="mt-4">Players</h5>
                <h4 className="text-white title-animation">
                  {players}
                </h4>
                <h5 className="mt-2">Rank</h5>
                <h4 className="text-white title-animation mb-2">
                  {rank}
                </h4>
              {/* <div className="section__content-cta"> */}
                {/* <Link href="tournaments" className="btn btn--primary">
                  Get started
                </Link> */}
              {/* </div> */}
            </div>
          </div>
          {/* <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <div className="reveal-img parallax-img">
                  <Image src={logo} alt="Image" priority width={300} />
                </div>
              </div>
            </div>
          </div> */}
          <div style={{marginBottom:'100px'}}></div>
        </div>
      </div>
      {/* <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div> */}
    </section>
  );
};

export default TeamCraft;
