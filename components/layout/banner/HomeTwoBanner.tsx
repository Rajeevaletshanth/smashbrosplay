import Image from "next/image";
import Link from "next/link";
// import bannerThumb from "@/public/images/banner/banner-two-thumb.png";
import bannerThumb from "@/public/images/banner/hero-wp.png";
import Frame from "@/public/images/frame-three.png";

const HomeTwoBanner = () => {
  return (
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-two__content">
              <h1 className="title-animation">
                SMASH <br/>THE <span> LIMITS </span> 
              </h1>
              <p className="primary-text">
              Join SmashBros, where passion meets precision, and elevate your badminton game with unmatched team spirit              </p>
              <div className="section__content-cta">
                <Link href="/sign-up" className="btn btn--primary">
                  Get Started
                </Link>
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
