"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NewBlood from "@/public/images/NewBlood.jpg";
import RookiePro from "@/public/images/RookiePro.jpg";
import OGShuttler from "@/public/images/OGShuttler.jpg";
import SmashBoss from "@/public/images/SmashBoss.jpg";
import two from "@/public/images/home-seven/two.png";
import three from "@/public/images/home-seven/three.png";
import four from "@/public/images/home-seven/four.png";
import five from "@/public/images/home-seven/five.png";
import axios from "axios";

const CaseStudySeven = () => {
  const [isActive, setIsActive] = useState(0);
  const [list, setList] = useState<any>([])

  const fetchList = async () => {
    try {
      const response: any = await axios.get('https://api.brexe.com/sbuser/list')
      if (response.data.response === 'success') {
        setList(response.data.users)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <section className=" h-s-case hg-i">
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section__header text-center">
              <h2 className="mt-12 title title-animation">Squad</h2>
              <p>
                {`Meet the pillars of SmashBros – the heart and soul of our squad. We’re a group that believes in laughter, loyalty, and unforgettable moments. Together, we’re unstoppable!`}
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-s-case-wrapper">
        {list?.map((item: any, index: any) => {
          return <div
          key={index}
            className={
              "h-s-case-single" +
              (isActive === index ? " h-s-case-single-active" : " ")
            }
            onClick={() => setIsActive(index)}
          >
            <div className="thumb">
              <Image src={item?.rank === 'Smash Boss'? SmashBoss : item?.rank === 'OG Shuttler' ? OGShuttler : item?.rank === 'Rookie Bro'? RookiePro : NewBlood} alt="Image" priority />
            </div>
            <div className="h-case-content">
              <div className="case-title">
                <h2 className="light-title">
                  <Link href="#">{item?.username?.toUpperCase()}</Link>
                </h2>
              </div>
              <div className="h-c-continent">
                <h3 className="text-white" style={{ fontWeight: 700 }}>{item?.rank}</h3>
                {item?.rank === 'Smash Boss' ?
                  <p>
                    Top-tier, respected, and always leading.
                  </p> : item?.rank === 'OG Shuttler' ?
                    <p>
                      Experienced, reliable, and always in the mix.
                    </p> : item?.rank === 'Rookie Bro' ?
                      <p>
                        Still learning, but showing serious potential.
                      </p> : <p>
                        Fresh to the squad, full of promise.
                      </p>
                }
                <Link href="#" className="cta">
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  );
};

export default CaseStudySeven;
