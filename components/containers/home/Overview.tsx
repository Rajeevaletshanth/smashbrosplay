"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/shuttle.png";
import two from "@/public/images/overview/people.png";
import three from "@/public/images/overview/heartbeat.png";
import four from "@/public/images/overview/party.png";

const Overview = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);

  return (
    <section className="section overview pb-0 ">
      <div className="container">
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 0 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority width={75}/>
              </div>
              <div className="overview__content">
                <h4>Game On</h4>
                <p className="tertiary-text">
                  SmashBros is where fun meets badminton! We bring energy, laughter, and epic moments to the court.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 1 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority  width={75}/>
              </div>
              <div className="overview__content">
                <h4>Join the Crew</h4>
                <p className="tertiary-text">
                  Whether you're smashing shuttles or just here for the vibes, there's always room for more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 2 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="overview__thumb">
                <Image src={three} alt="Image" priority  width={75}/>
              </div>
              <div className="overview__content">
                <h4>Fun, No Pressure</h4>
                <p className="tertiary-text">
                  Just good friends, exciting games, and tons of fun. No competition, just laughs and good vibes!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 3 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="overview__thumb">
                <Image src={four} alt="Image" priority  width={75}/>
              </div>
              <div className="overview__content">
                <h4>All About the Fun</h4>
                <p className="tertiary-text">
                  Our goal is simple have a blast, enjoy the game, and create memories with the best team around!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
