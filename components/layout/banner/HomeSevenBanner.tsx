"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import frame from "@/public/images/frame-one.png";
import one from "@/public/images/banner/banner-s-t-thumb.png";
import two from "@/public/images/SmashClash.png";

const HomeSevenBanner = ({title = 'Tournaments', description = 'Experience the perfect blend of fun and competition with exciting matches and unforgettable moments'}:any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="banner-seven">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9 col-xxl-7">
              <div className="banner-seven__content">
                <h1 className="title-animation fw-9">
                  {title}
                </h1>
                <div className="banner-seven__group">
                  {/* <div className="thumb">
                    <Image src={one} alt="Image" priority />
                    <button
                      title="video Player"
                      className="video-btn"
                      onClick={() => setOpen(true)}
                    >
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </button>
                  </div> */}
                  <div className="content">
                    <p className="primary-text">
                    {description}
                    </p>
                  </div>
                </div>
                <div className="section__cta text-start">
                  {/* <Link href="sign-in" className="btn btn--primary">
                    Get Started
                  </Link> */}
                </div>
              </div>
              {/* <Link className="scroll-position-btn" href="#scrollPosition">
                <Image src={frame} alt="Image" priority />
                <i className="bi bi-arrow-down"></i>
              </Link> */}
            </div>
          </div>
        </div>
        {/* <div className="banner-seven__thumb thumb-left">
          <Image src={two} alt="Image" priority width={250}/>
        </div> */}
      </section>
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="RvreULjnzFo"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
};

export default HomeSevenBanner;
