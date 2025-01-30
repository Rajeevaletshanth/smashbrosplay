'use client'

import Image from "next/image";
import Link from "next/link";
// import CraftThumb from "@/public/images/craft-thumb.png";
import CraftThumb from "@/public/images/smashclash.jpg";
import Shape from "@/public/images/footer/shape-one.png";
import { useEffect, useState, useRef } from "react";
import VersusCard from "./components/VersusCard";
import "./components/VersusCard.css";
import { jsPlumb } from "jsplumb";
import bgimg from '@/public/images/RTFLines.png'

const teamArray = [
  {
    teamName: 'CODE RED',
    img: '/images/teams/profile/Code Red Profile.jpg'
  },
  {
    teamName: 'SMASHERS',
    img: '/images/teams/profile/Smashers Profile.jpg'
  },
  {
    teamName: 'TITANS',
    img: '/images/teams/profile/Titans profile.png'
  },
  {
    teamName: 'VENPURA',
    img: '/images/teams/profile/Venpura Profile.jpg'
  },
  {
    teamName: 'DARK ROGERS',
    img: '/images/teams/profile/Dark Rogers Profile.jpg'
  },
  {
    teamName: 'TEAM BADDIES',
    img: '/images/teams/profile/Team Baddies Profile.jpg'
  },
]

const Brackets = () => {
  const [width, setWidth] = useState(1000);
  const qualifier1Ref = useRef<any>(null);
  const qualifier2Top1Ref = useRef<any>(null);
  const qualifier2Top2Ref = useRef<any>(null);
  const finalRef = useRef<any>(null);
  const final2Ref = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }

    const instance: any = jsPlumb.getInstance(); // Corrected API usage

    // Add connections between "Qualifier 1" and "Final"
    instance.connect({
      source: qualifier1Ref.current,
      target: finalRef.current,
      anchors: ["Center", "Center"],
      connector: "Straight",
      paintStyle: { stroke: "white", strokeWidth: 3 },
      endpoint: "Blank"
      // overlays: [
      //   ["Arrow", { location: 1, width: 10, length: 10 }]
      // ]
    });

    instance.connect({
      source: qualifier1Ref.current,
      target: qualifier2Top1Ref.current,
      anchors: ["Center", "Center"],
      connector: "Straight",
      paintStyle: { stroke: "white", strokeWidth: 3 },
      endpoint: "Blank",
      // overlays: [
      //   ["Arrow", { location: 1, width: 10, length: 10 }]
      // ]
    });

    instance.connect({
      source: qualifier2Top1Ref.current,
      target: qualifier2Top2Ref.current,
      anchors: ["Center", "Center"],
      connector: "Straight",
      paintStyle: { stroke: "white", strokeWidth: 3 },
      endpoint: "Blank",
      overlays: [
        ["Arrow", { location: 1, width: 10, length: 10 }]
      ]
    });

    instance.connect({
      source: finalRef.current,
      target: final2Ref.current,
      anchors: ["Center", "Center"],
      connector: "Straight",
      paintStyle: { stroke: "white", strokeWidth: 3 },
      endpoint: "Blank",
      overlays: [
        ["Arrow", { location: 1, width: 10, length: 10 }]
      ]
    });

    // Cleanup on unmount
    return () => {
      instance.deleteEveryConnection();
      instance.reset();
    };
  }, []);

  return (
    <section className="mt-4 pb-0 craft">
      <div className="container" id="bracket-container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">Coming Soon</span> */}
              <h2 className="title title-animation">
                Road To Final
              </h2>
              <p>
                The Battle for Greatness Begins.
              </p>
              {/* <div className="section__content-cta">
                <Link href="tournaments" className="btn btn--primary">
                  Get started
                </Link>
              </div> */}
            </div>
          </div>

          <div className="mt-4">
            <Image alt='Bg' src={bgimg}  />
          </div>
        </div>
      </div>
      {/* <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div> */}
    </section>
  );
};

export default Brackets;
