"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import one from "@/public/images/mascots/1.png";
import two from "@/public/images/mascots/2.png";
import three from "@/public/images/mascots/3.png";
import four from "@/public/images/mascots/4.png";
import five from "@/public/images/mascots/5.png";
import six from "@/public/images/mascots/6.png";
import seven from "@/public/images/mascots/7.png";
import eight from "@/public/images/mascots/8.png";
import nine from "@/public/images/mascots/9.png";


const MascotSelection = ({ opened, setMascot }: any) => {
  const [isOverviewOpen, setOverviewOpen] = useState(opened);

  useEffect(() => {
    console.log(isOverviewOpen)
    setMascot(isOverviewOpen === 'one' ? 'Ninja' :
      isOverviewOpen === 'two' ? 'King' :
        isOverviewOpen === 'three' ? 'Wolf' :
          isOverviewOpen === 'four' ? 'Paw' :
            isOverviewOpen === 'five' ? 'Eagle' :
              isOverviewOpen === 'six' ? 'Lion' :
                isOverviewOpen === 'seven' ? 'Bolt' : 'Shuttle'

    )
  }, [isOverviewOpen])

  return (
    <section className=" overview pb-0 ">
      <div className="container">
        <div className="row fade-wrapper" style={{ rowGap: '24px' }}>
        <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'one' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('one')}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'two' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('two')}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'three' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('three')}
            >
              <div className="overview__thumb">
                <Image src={three} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'four' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('four')}
            >
              <div className="overview__thumb">
                <Image src={four} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'five' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('five')}
            >
              <div className="overview__thumb">
                <Image src={five} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'six' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('six')}
            >
              <div className="overview__thumb">
                <Image src={six} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'seven' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('seven')}
            >
              <div className="overview__thumb">
                <Image src={seven} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single2 " +
                (isOverviewOpen === 'nine' ? " overview__single2-active" : " ")
              }
              onClick={() => setOverviewOpen('nine')}
            >
              <div className="overview__thumb">
                <Image src={nine} alt="Image" priority width={290} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotSelection;
