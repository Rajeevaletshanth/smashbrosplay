import Image from "next/image";
import Link from "next/link";
import unlockThumb from "@/public/images/smashclash.jpg";

const UnlockSection = () => {
  return (
    <section className="section unlock pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Tournament</span>
              <h2 className="title title-animation">
                Smash Clash
              </h2>
              <p>
                Join us for an electrifying Badminton Showdown! Register your team now and 
                compete for the ultimate racket prize!
              </p>
              <div className="section__content-cta">
                <Link href="shop" className="btn btn--primary">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
            <div className="unlock__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={unlockThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
